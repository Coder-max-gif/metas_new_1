from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.responses import FileResponse
from middleware.auth import get_current_user
from middleware.rate_limit import limiter
from services.file_service import FileService
from config.database import get_database
from utils.helpers import utc_now
from uuid import uuid4

router = APIRouter(prefix="/api/downloads", tags=["Downloads"])
file_service = FileService()

PRODUCTS = {
    "indicator": {
        "id": "indicator",
        "name": "MT5 Premium Indicator",
        "description": "Professional order flow indicator for MetaTrader 5",
        "filename": "MT5_Premium_Indicator.ex5",
        "version": "1.0.0",
        "allowed_plans": ["indicator", "bundle"],
    },
    "algorithm": {
        "id": "algorithm",
        "name": "MT5 Premium Algorithm",
        "description": "Advanced automated trading system for MetaTrader 5",
        "filename": "MT5_Premium_Algorithm.ex5",
        "version": "1.0.0",
        "allowed_plans": ["algorithm", "bundle"],
    },
}

ALLOWED_STATUSES = ["active", "trial"]


def _client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _file_path_for(product_id: str):
    if product_id == "indicator":
        return file_service.get_indicator_file()
    if product_id == "algorithm":
        return file_service.get_algorithm_file()
    return None


async def _log_download(user_id: str, product_id: str, ip: str, user_agent: str):
    db = get_database()
    await db.downloads.insert_one({
        "id": str(uuid4()),
        "user_id": user_id,
        "product_type": product_id,
        "ip_address": ip,
        "user_agent": user_agent,
        "created_at": utc_now(),
    })


def _user_can_download(user: dict, product_id: str) -> tuple[bool, str]:
    product = PRODUCTS.get(product_id)
    if not product:
        return False, "Unknown product"
    plan = user.get("subscription_type")
    sub_status = user.get("subscription_status")
    if plan not in product["allowed_plans"]:
        return False, f"Requires {' or '.join(product['allowed_plans'])} subscription"
    if sub_status not in ALLOWED_STATUSES:
        return False, "Subscription is not active"
    return True, ""


@router.get("/products")
async def list_products(current_user: dict = Depends(get_current_user)):
    products = []
    for product_id, product in PRODUCTS.items():
        can_download, reason = _user_can_download(current_user, product_id)
        file_path = _file_path_for(product_id)
        size_bytes = file_path.stat().st_size if file_path and file_path.exists() else 0
        products.append({
            "id": product["id"],
            "name": product["name"],
            "description": product["description"],
            "filename": product["filename"],
            "version": product["version"],
            "size_bytes": size_bytes,
            "can_download": can_download,
            "locked_reason": reason if not can_download else None,
        })
    return {"products": products}


@router.get("/history")
async def download_history(current_user: dict = Depends(get_current_user), limit: int = 20):
    db = get_database()
    cursor = db.downloads.find(
        {"user_id": current_user["id"]},
        {"_id": 0}
    ).sort("created_at", -1).limit(max(1, min(limit, 100)))
    history = []
    async for item in cursor:
        product = PRODUCTS.get(item.get("product_type"))
        history.append({
            "id": item.get("id"),
            "product_id": item.get("product_type"),
            "product_name": product["name"] if product else item.get("product_type"),
            "ip_address": item.get("ip_address"),
            "created_at": item.get("created_at"),
        })
    return {"history": history}


async def _serve_product(request: Request, current_user: dict, product_id: str):
    product = PRODUCTS.get(product_id)
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")

    can_download, reason = _user_can_download(current_user, product_id)
    if not can_download:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=reason)

    file_path = _file_path_for(product_id)
    if not file_path or not file_path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File not available")

    await _log_download(
        user_id=current_user["id"],
        product_id=product_id,
        ip=_client_ip(request),
        user_agent=request.headers.get("user-agent", "unknown"),
    )

    return FileResponse(
        path=str(file_path),
        filename=product["filename"],
        media_type="application/octet-stream",
        headers={"Content-Disposition": f'attachment; filename="{product["filename"]}"'},
    )


@router.get("/indicator")
@limiter.limit("10/minute")
async def download_indicator(request: Request, current_user: dict = Depends(get_current_user)):
    return await _serve_product(request, current_user, "indicator")


@router.get("/algorithm")
@limiter.limit("10/minute")
async def download_algorithm(request: Request, current_user: dict = Depends(get_current_user)):
    return await _serve_product(request, current_user, "algorithm")
