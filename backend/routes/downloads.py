from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from middleware.auth import get_current_user
from services.file_service import FileService
from config.database import get_database
from utils.helpers import utc_now
from uuid import uuid4

router = APIRouter(prefix="/api/downloads", tags=["Downloads"])
file_service = FileService()

async def log_download(user_id: str, product_type: str, ip: str):
    db = get_database()
    download_log = {
        "id": str(uuid4()),
        "user_id": user_id,
        "product_type": product_type,
        "ip_address": ip,
        "created_at": utc_now()
    }
    await db.downloads.insert_one(download_log)

@router.get("/indicator")
async def download_indicator(current_user: dict = Depends(get_current_user)):
    subscription_type = current_user.get("subscription_type")
    subscription_status = current_user.get("subscription_status")
    
    allowed_plans = ["indicator", "bundle"]
    allowed_statuses = ["active", "trial"]
    
    if subscription_type not in allowed_plans or subscription_status not in allowed_statuses:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Active subscription required to download indicator"
        )
    
    await log_download(current_user["id"], "indicator", "0.0.0.0")
    
    file_path = file_service.get_indicator_file()
    
    return FileResponse(
        path=file_path,
        filename="MT5_Premium_Indicator.ex5",
        media_type="application/octet-stream"
    )

@router.get("/algorithm")
async def download_algorithm(current_user: dict = Depends(get_current_user)):
    subscription_type = current_user.get("subscription_type")
    subscription_status = current_user.get("subscription_status")
    
    allowed_plans = ["algorithm", "bundle"]
    allowed_statuses = ["active", "trial"]
    
    if subscription_type not in allowed_plans or subscription_status not in allowed_statuses:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Active subscription required to download algorithm"
        )
    
    await log_download(current_user["id"], "algorithm", "0.0.0.0")
    
    file_path = file_service.get_algorithm_file()
    
    return FileResponse(
        path=file_path,
        filename="MT5_Premium_Algorithm.ex5",
        media_type="application/octet-stream"
    )