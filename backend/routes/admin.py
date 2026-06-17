from fastapi import APIRouter, HTTPException, status, Depends
from models.user import UserResponse
from models.payment import PaymentResponse
from middleware.auth import get_current_user
from config.database import get_database
from typing import List
from datetime import datetime

router = APIRouter(prefix="/api/admin", tags=["Admin"])

async def get_admin_user(current_user: dict = Depends(get_current_user)):
    if current_user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized as admin"
        )
    return current_user

@router.get("/users", response_model=List[UserResponse])
async def get_all_users(admin: dict = Depends(get_admin_user)):
    db = get_database()
    users = await db.users.find({}, {"_id": 0}).to_list(length=1000)
    return users

@router.get("/payments", response_model=List[PaymentResponse])
async def get_all_payments(admin: dict = Depends(get_admin_user)):
    db = get_database()
    payments = await db.payments.find({}, {"_id": 0}).to_list(length=1000)
    return payments

@router.patch("/payments/{payment_id}/approve")
async def approve_payment(payment_id: str, admin: dict = Depends(get_admin_user)):
    db = get_database()
    
    payment = await db.payments.find_one({"id": payment_id})
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    
    await db.payments.update_one(
        {"id": payment_id},
        {
            "$set": {
                "status": "approved",
                "reviewed_at": datetime.utcnow(),
                "reviewed_by": admin["id"]
            }
        }
    )
    
    # Update user's subscription
    product_id = payment["product_id"]
    from routes.payments import PRODUCTS
    product = next((p for p in PRODUCTS if p["id"] == product_id), None)
    if product:
        await db.users.update_one(
            {"id": payment["user_id"]},
            {
                "$set": {
                    "subscription_type": product["type"],
                    "subscription_status": "active"
                }
            }
        )
    
    return {"message": "Payment approved successfully"}

@router.patch("/payments/{payment_id}/reject")
async def reject_payment(payment_id: str, admin: dict = Depends(get_admin_user)):
    db = get_database()
    
    payment = await db.payments.find_one({"id": payment_id})
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    
    await db.payments.update_one(
        {"id": payment_id},
        {
            "$set": {
                "status": "rejected",
                "reviewed_at": datetime.utcnow(),
                "reviewed_by": admin["id"]
            }
        }
    )
    
    return {"message": "Payment rejected successfully"}

from models.contact import ContactResponse

@router.get("/contacts", response_model=List[ContactResponse])
async def get_all_contacts(admin: dict = Depends(get_admin_user)):
    db = get_database()
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(length=1000)
    # Sort contacts by created_at descending so newer ones appear first
    contacts.sort(key=lambda x: x.get("created_at") if x.get("created_at") else datetime.min, reverse=True)
    return contacts

@router.patch("/contacts/{contact_id}/resolve")
async def resolve_contact(contact_id: str, admin: dict = Depends(get_admin_user)):
    db = get_database()
    contact = await db.contacts.find_one({"id": contact_id})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact message not found")
    
    await db.contacts.update_one(
        {"id": contact_id},
        {"$set": {"status": "resolved"}}
    )
    return {"message": "Contact message marked as resolved"}

@router.patch("/stats")
async def update_stats(data: dict, admin: dict = Depends(get_admin_user)):
    db = get_database()
    
    update_data = {}
    if "downloads_total" in data:
        update_data["downloads.total"] = data["downloads_total"]
    if "licenses_active" in data:
        update_data["licenses.active"] = data["licenses_active"]
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No valid fields to update")
    
    await db.stats.update_one(
        {"_id": "dashboard"},
        {"$set": update_data},
        upsert=True
    )
    return {"message": "Stats updated successfully"}
