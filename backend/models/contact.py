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

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True