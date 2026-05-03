from fastapi import APIRouter, Depends, HTTPException, status
from models.subscription import SubscriptionCreate, SubscriptionResponse
from middleware.auth import get_current_user, get_current_admin
from config.database import get_database
from utils.helpers import utc_now
from uuid import uuid4
from datetime import timedelta

router = APIRouter(prefix="/api/subscriptions", tags=["Subscriptions"])

@router.post("/activate")
async def activate_subscription(
    subscription_data: SubscriptionCreate,
    current_user: dict = Depends(get_current_admin)
):
    db = get_database()
    
    user = await db.users.find_one({"id": subscription_data.user_id})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    subscription_dict = {
        "id": str(uuid4()),
        "user_id": subscription_data.user_id,
        "plan": subscription_data.plan,
        "status": "active",
        "start_date": utc_now(),
        "end_date": None,
        "auto_renew": True
    }
    
    await db.subscriptions.insert_one(subscription_dict)
    
    await db.users.update_one(
        {"id": subscription_data.user_id},
        {
            "$set": {
                "subscription_type": subscription_data.plan,
                "subscription_status": "active",
                "updated_at": utc_now()
            }
        }
    )
    
    return {
        "message": "Subscription activated successfully",
        "subscription_id": subscription_dict["id"]
    }

@router.get("/me")
async def get_my_subscription(current_user: dict = Depends(get_current_user)):
    db = get_database()
    
    subscription = await db.subscriptions.find_one(
        {"user_id": current_user["id"], "status": "active"},
        {"_id": 0}
    )
    
    if not subscription:
        return {
            "subscription": None,
            "message": "No active subscription"
        }
    
    return {"subscription": subscription}