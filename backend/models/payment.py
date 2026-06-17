from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class PaymentCreate(BaseModel):
    user_id: str
    product_id: str
    product_type: str
    amount: float
    transaction_id: str
    account_number: Optional[str] = None
    screenshot_url: Optional[str] = None

class PaymentResponse(BaseModel):
    id: str
    user_id: str
    product_id: str
    product_type: str
    amount: float
    transaction_id: str
    account_number: Optional[str] = None
    screenshot_url: Optional[str] = None
    status: str
    created_at: datetime
    reviewed_at: Optional[datetime] = None
    reviewed_by: Optional[str] = None
    
    class Config:
        from_attributes = True

class PaymentInDB(BaseModel):
    id: str
    user_id: str
    product_id: str
    product_type: str
    amount: float
    transaction_id: str
    account_number: Optional[str] = None
    screenshot_url: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    reviewed_at: Optional[datetime] = None
    reviewed_by: Optional[str] = None
