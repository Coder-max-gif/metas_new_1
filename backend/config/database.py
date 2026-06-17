import os
import logging
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "metas_db")

class Database:
    client = None
    
database = Database()

async def connect_db():
    try:
        from motor.motor_asyncio import AsyncIOMotorClient
        logger.info(f"Attempting to connect to MongoDB at {MONGO_URL}")
        database.client = AsyncIOMotorClient(MONGO_URL, serverSelectionTimeoutMS=5000)
        # Ping the server to verify connection
        await database.client.admin.command('ping')
        logger.info(f"Successfully connected to MongoDB at {MONGO_URL}")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        logger.warning("Server will still start, but database-dependent features may not work.")
    
async def close_db():
    if database.client:
        try:
            database.client.close()
            logger.info("Closed MongoDB connection")
        except Exception as e:
            logger.error(f"Error closing MongoDB connection: {e}")
    
def get_database():
    if not database.client:
        logger.error("Database connection not available")
        return None
    return database.client[DB_NAME]