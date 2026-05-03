from pydantic import BaseModel, EmailStr
from datetime import datetime

class ContactSubmit(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactInDB(ContactSubmit):
    id: str
    status: str = "new"
    created_at: datetime