"""Seed script to create demo test users with various entitlement levels."""
import asyncio
import sys
from pathlib import Path

# Ensure backend module paths resolve
sys.path.insert(0, str(Path(__file__).resolve().parent))

from dotenv import load_dotenv
load_dotenv()

from config.database import connect_db, close_db, get_database
from utils.password import hash_password
from utils.helpers import utc_now
from uuid import uuid4

DEMO_USERS = [
    {
        "email": "bundle@metas.test",
        "password": "Test@1234",
        "full_name": "Bundle Pro Tester",
        "subscription_type": "bundle",
        "subscription_status": "active",
    },
    {
        "email": "indicator@metas.test",
        "password": "Test@1234",
        "full_name": "Indicator Tester",
        "subscription_type": "indicator",
        "subscription_status": "active",
    },
    {
        "email": "algorithm@metas.test",
        "password": "Test@1234",
        "full_name": "Algorithm Tester",
        "subscription_type": "algorithm",
        "subscription_status": "active",
    },
    {
        "email": "free@metas.test",
        "password": "Test@1234",
        "full_name": "Free Tier Tester",
        "subscription_type": "none",
        "subscription_status": "inactive",
    },
]


async def seed_users():
    await connect_db()
    db = get_database()

    for user_data in DEMO_USERS:
        existing = await db.users.find_one({"email": user_data["email"]})
        user_record = {
            "email": user_data["email"],
            "full_name": user_data["full_name"],
            "hashed_password": hash_password(user_data["password"]),
            "role": "user",
            "subscription_type": user_data["subscription_type"],
            "subscription_status": user_data["subscription_status"],
            "updated_at": utc_now(),
            "last_login": None,
        }
        if existing:
            await db.users.update_one(
                {"email": user_data["email"]},
                {"$set": user_record},
            )
            print(f"Updated: {user_data['email']} (plan={user_data['subscription_type']})")
        else:
            user_record["id"] = str(uuid4())
            user_record["created_at"] = utc_now()
            await db.users.insert_one(user_record)
            print(f"Created: {user_data['email']} (plan={user_data['subscription_type']})")

    await close_db()
    print("\nSeed complete. Credentials written to /app/memory/test_credentials.md")


if __name__ == "__main__":
    asyncio.run(seed_users())
