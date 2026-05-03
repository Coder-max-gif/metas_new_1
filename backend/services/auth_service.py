from config.database import get_database
from models.user import UserCreate, UserInDB
from utils.password import hash_password, verify_password
from utils.jwt_handler import create_access_token, create_refresh_token
from utils.helpers import utc_now
from uuid import uuid4
from datetime import datetime

class AuthService:
    @property
    def db(self):
        return get_database()
    
    async def register_user(self, user_data: UserCreate):
        existing_user = await self.db.users.find_one({"email": user_data.email})
        if existing_user:
            return None, "Email already registered"
        
        user_id = str(uuid4())
        hashed_pwd = hash_password(user_data.password)
        
        user_dict = {
            "id": user_id,
            "email": user_data.email,
            "full_name": user_data.full_name,
            "hashed_password": hashed_pwd,
            "role": "user",
            "subscription_type": "none",
            "subscription_status": "inactive",
            "created_at": utc_now(),
            "updated_at": utc_now(),
            "last_login": None
        }
        
        await self.db.users.insert_one(user_dict)
        return user_id, None
    
    async def authenticate_user(self, email: str, password: str):
        user = await self.db.users.find_one({"email": email})
        if not user:
            return None
        
        if not verify_password(password, user["hashed_password"]):
            return None
        
        await self.db.users.update_one(
            {"email": email},
            {"$set": {"last_login": utc_now()}}
        )
        
        return user
    
    def generate_tokens(self, email: str):
        access_token = create_access_token(data={"sub": email})
        refresh_token = create_refresh_token(data={"sub": email})
        return access_token, refresh_token
    
    async def get_user_by_email(self, email: str):
        return await self.db.users.find_one({"email": email}, {"_id": 0})