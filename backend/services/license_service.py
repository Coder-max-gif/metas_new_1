import logging
from config.database import get_database
from utils.helpers import generate_license_key, utc_now
from uuid import uuid4
from datetime import datetime

logger = logging.getLogger(__name__)

class LicenseService:
    @property
    def db(self):
        return get_database()
    
    async def generate_license(self, user_id: str, plan: str):
        if self.db is None:
            logger.error("Database not available for license generation")
            raise Exception("Database unavailable")
        
        license_key = generate_license_key()
        
        license_dict = {
            "id": str(uuid4()),
            "user_id": user_id,
            "key": license_key,
            "plan": plan,
            "active": True,
            "mt5_account": None,
            "machine_id": None,
            "last_ping": None,
            "created_at": utc_now()
        }
        
        await self.db.licenses.insert_one(license_dict)
        return license_key
    
    async def verify_license(self, license_key: str, mt5_account: str, machine_id: str):
        if self.db is None:
            logger.error("Database not available for license verification")
            return {"valid": False, "message": "Service unavailable"}
            
        license_doc = await self.db.licenses.find_one({"key": license_key})
        
        if not license_doc or not license_doc.get("active"):
            return {"valid": False, "message": "Invalid or inactive license"}
        
        if license_doc.get("mt5_account") and license_doc["mt5_account"] != mt5_account:
            return {"valid": False, "message": "License bound to different MT5 account"}
        
        if license_doc.get("machine_id") and license_doc["machine_id"] != machine_id:
            return {"valid": False, "message": "License bound to different machine"}
        
        await self.db.licenses.update_one(
            {"key": license_key},
            {
                "$set": {
                    "mt5_account": mt5_account,
                    "machine_id": machine_id,
                    "last_ping": utc_now()
                }
            }
        )
        
        return {
            "valid": True,
            "plan": license_doc["plan"],
            "expires": None
        }
    
    async def get_user_licenses(self, user_id: str):
        if self.db is None:
            logger.error("Database not available for getting user licenses")
            return []
            
        cursor = self.db.licenses.find({"user_id": user_id, "active": True}, {"_id": 0})
        return await cursor.to_list(length=100)