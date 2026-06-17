from fastapi import APIRouter, HTTPException, status, Depends, UploadFile, File, Form
from models.payment import PaymentCreate, PaymentResponse, PaymentInDB
from models.product import ProductResponse
from middleware.auth import get_current_user
from uuid import uuid4
from datetime import datetime
from config.database import get_database
from typing import List
import os

router = APIRouter(prefix="/api/payments", tags=["Payments"])

# Define products
PRODUCTS = [
    {"id": "ind-arrows", "name": "Arrows Indicator", "type": "indicator", "price": 49, "duration": 6, "duration_unit": "months", "description": "Arrows indicator for entry signals", "features": ["Real-time arrows", "Multi-timeframe", "Custom alerts"], "icon": "arrows"},
    {"id": "ind-bs-numbers", "name": "B&S Numbers Indicator", "type": "indicator", "price": 49, "duration": 6, "duration_unit": "months", "description": "Buy & Sell numbers indicator", "features": ["Buy/Sell numbers", "Volume analysis", "Custom alerts"], "icon": "numbers"},
    {"id": "ind-future-pattern", "name": "Future Pattern Indicator", "type": "indicator", "price": 49, "duration": 6, "duration_unit": "months", "description": "Future pattern recognition", "features": ["Pattern recognition", "Predictive analysis", "Custom alerts"], "icon": "pattern"},
    {"id": "ind-session", "name": "Session Indicator", "type": "indicator", "price": 49, "duration": 6, "duration_unit": "months", "description": "Trading session indicator", "features": ["Session tracking", "Time-based alerts", "Customizable"], "icon": "session"},
    {"id": "all-indicators", "name": "All Indicators (Bundle)", "type": "indicator", "price": 99, "duration": 6, "duration_unit": "months", "description": "All 4 premium indicators in one bundle", "features": ["Arrows Indicator", "B&S Numbers Indicator", "Future Pattern Indicator", "Session Indicator"], "icon": "bundle"},
    {"id": "algo-premium", "name": "Premium Algorithm", "type": "algorithm", "price": 99, "duration": 1, "duration_unit": "month", "description": "Premium automated trading algorithm", "features": ["Automated execution", "Risk management", "Backtesting"], "icon": "algorithm"}
]

@router.get("/products", response_model=List[ProductResponse])
async def get_products():
    return PRODUCTS

@router.post("/create", response_model=PaymentResponse, status_code=status.HTTP_201_CREATED)
async def create_payment(
    product_id: str = Form(...),
    transaction_id: str = Form(...),
    account_number: str = Form(...),
    screenshot: UploadFile = File(None),
    current_user: dict = Depends(get_current_user)
):
    db = get_database()
    
    product = next((p for p in PRODUCTS if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    payment_id = str(uuid4())
    
    screenshot_url = None
    if screenshot:
        upload_dir = "uploads/payments"
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, f"{payment_id}_{screenshot.filename}")
        with open(file_path, "wb") as buffer:
            content = await screenshot.read()
            buffer.write(content)
        screenshot_url = file_path.replace("\\", "/")
    
    payment_dict = {
        "id": payment_id,
        "user_id": current_user["id"],
        "product_id": product_id,
        "product_type": product["type"],
        "amount": product["price"],
        "transaction_id": transaction_id,
        "account_number": account_number,
        "screenshot_url": screenshot_url,
        "status": "pending",
        "created_at": datetime.utcnow(),
        "reviewed_at": None,
        "reviewed_by": None
    }
    
    await db.payments.insert_one(payment_dict)
    
    return payment_dict

@router.get("/my-payments", response_model=List[PaymentResponse])
async def get_my_payments(current_user: dict = Depends(get_current_user)):
    db = get_database()
    payments = await db.payments.find({"user_id": current_user["id"]}).to_list(length=100)
    return payments
