import asyncio
import sys
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).parent.parent
sys.path.insert(0, str(backend_dir))

from motor.motor_asyncio import AsyncIOMotorClient
from uuid import uuid4
from utils.password import hash_password
from utils.helpers import utc_now
import os
from dotenv import load_dotenv

load_dotenv()

async def seed_admin():
    mongo_url = os.getenv("MONGO_URL", "mongodb+srv://dhulesankalp1_db_user:MSAsVqZFF6QjDsU3@cluster0.lluull8.mongodb.net/?appName=Cluster0")
    db_name = os.getenv("DB_NAME", "metas_db")
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    admin_email = "admin@gmail.com"
    
    existing_admin = await db.users.find_one({"email": admin_email})
    if existing_admin:
        print("Admin user already exists!")
        return
    
    admin_id = str(uuid4())
    hashed_pwd = hash_password("admin@12345")
    
    admin_dict = {
        "id": admin_id,
        "email": admin_email,
        "full_name": "Admin",
        "hashed_password": hashed_pwd,
        "role": "admin",
        "subscription_type": "all",
        "subscription_status": "active",
        "created_at": utc_now(),
        "updated_at": utc_now(),
        "last_login": None
    }
    
    await db.users.insert_one(admin_dict)
    print("Admin user created successfully!")
    print(f"Email: admin@gmail.com")
    print(f"Password: admin@12345")

if __name__ == "__main__":
    asyncio.run(seed_admin())
