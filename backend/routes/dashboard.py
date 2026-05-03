from fastapi import APIRouter, Depends, HTTPException, status
from middleware.auth import get_current_user
from config.database import get_database

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])

@router.get("/stats")
async def get_dashboard_stats(current_user: dict = Depends(get_current_user)):
    db = get_database()
    
    downloads_count = await db.downloads.count_documents({"user_id": current_user["id"]})
    
    licenses_count = await db.licenses.count_documents({
        "user_id": current_user["id"],
        "active": True
    })
    
    subscription = {
        "plan": current_user.get("subscription_type", "none"),
        "status": current_user.get("subscription_status", "inactive")
    }
    
    return {
        "subscription": subscription,
        "downloads": {
            "total": downloads_count
        },
        "licenses": {
            "active": licenses_count
        }
    }