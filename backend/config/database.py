import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "metas")

class Database:
    client: AsyncIOMotorClient = None
    
database = Database()

async def connect_db():
    database.client = AsyncIOMotorClient(MONGO_URL)
    print(f"Connected to MongoDB at {MONGO_URL}")
    
async def close_db():
    database.client.close()
    print("Closed MongoDB connection")
    
def get_database():
    return database.client[DB_NAME]