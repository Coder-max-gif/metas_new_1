import logging
from config.database import get_database
from models.user import UserCreate, UserInDB
from utils.password import hash_password, verify_password
from utils.jwt_handler import create_access_token, create_refresh_token
from utils.helpers import utc_now
from uuid import uuid4
from datetime import datetime

logger = logging.getLogger(__name__)

class AuthService:
    @property
    def db(self):
        return get_database()
    
    async def register_user(self, user_data: UserCreate):
        try:
            if self.db is None:
                logger.error("Database not available")
                return None, "Service temporarily unavailable"
                
            existing_user = await self.db.users.find_one({"email": user_data.email})
            if existing_user:
                logger.info(f"Registration attempt for existing email: {user_data.email}")
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
            logger.info(f"User registered successfully: {user_data.email}")
            return user_id, None
        except Exception as e:
            logger.error(f"Error during registration: {e}", exc_info=True)
            return None, "An error occurred during registration"
    
    async def authenticate_user(self, email: str, password: str):
        try:
            if self.db is None:
                logger.error("Database not available during authentication")
                return None
                
            user = await self.db.users.find_one({"email": email})
            if not user:
                logger.info(f"Login attempt for non-existent email: {email}")
                return None
            
            if not verify_password(password, user["hashed_password"]):
                logger.info(f"Failed login attempt for: {email}")
                return None
            
            await self.db.users.update_one(
                {"email": email},
                {"$set": {"last_login": utc_now()}}
            )
            
            logger.info(f"User authenticated successfully: {email}")
            return user
        except Exception as e:
            logger.error(f"Error during authentication: {e}", exc_info=True)
            return None
    
    def generate_tokens(self, email: str):
        try:
            access_token = create_access_token(data={"sub": email})
            refresh_token = create_refresh_token(data={"sub": email})
            logger.info(f"Generated tokens for: {email}")
            return access_token, refresh_token
        except Exception as e:
            logger.error(f"Error generating tokens: {e}", exc_info=True)
            raise
    
    async def get_user_by_email(self, email: str):
        try:
            if self.db is None:
                logger.error("Database not available when fetching user")
                return None
            return await self.db.users.find_one({"email": email}, {"_id": 0})
        except Exception as e:
            logger.error(f"Error fetching user {email}: {e}", exc_info=True)
            return None