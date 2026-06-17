import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

load_dotenv()

async def test_connection():
    mongo_url = os.getenv("MONGO_URL")
    db_name = os.getenv("DB_NAME")
    
    print(f"Connecting to MongoDB with URL: {mongo_url}")
    print(f"Database name: {db_name}")
    
    try:
        client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=5000)
        # Ping the server
        await client.admin.command('ping')
        print("Successfully connected to MongoDB!")
        
        db = client[db_name]
        print(f"Successfully accessed database: {db_name}")
        
        # List collections
        collections = await db.list_collection_names()
        print(f"Collections in database: {collections}")
        
        return True
        
    except Exception as e:
        print(f"Connection failed: {type(e).__name__} - {e}")
        return False

if __name__ == "__main__":
    success = asyncio.run(test_connection())
    if success:
        print("\nNow let's seed the admin user!")
        import sys
        from pathlib import Path
        backend_dir = Path(__file__).parent
        sys.path.insert(0, str(backend_dir))
        from scripts.seed_admin import seed_admin
        asyncio.run(seed_admin())
