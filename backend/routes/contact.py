from fastapi import APIRouter, HTTPException, status
from models.contact import ContactSubmit
from config.database import get_database
from utils.helpers import utc_now
from uuid import uuid4

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("/submit")
async def submit_contact(contact_data: ContactSubmit):
    db = get_database()
    
    contact_dict = {
        "id": str(uuid4()),
        "name": contact_data.name,
        "email": contact_data.email,
        "subject": contact_data.subject,
        "message": contact_data.message,
        "status": "new",
        "created_at": utc_now()
    }
    
    await db.contacts.insert_one(contact_dict)
    
    return {
        "message": "Contact form submitted successfully",
        "id": contact_dict["id"]
    }