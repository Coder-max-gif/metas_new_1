from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class SubscriptionCreate(BaseModel):
    user_id: str
    plan: str = Field(pattern="^(indicator|algorithm|bundle)$")

class SubscriptionResponse(BaseModel):
    id: str
    user_id: str
    plan: str
    status: str
    start_date: datetime
    end_date: Optional[datetime] = None
    auto_renew: bool

class SubscriptionInDB(BaseModel):
    id: str
    user_id: str
    plan: str
    status: str = "active"
    start_date: datetime = Field(default_factory=datetime.utcnow)
    end_date: Optional[datetime] = None
    auto_renew: bool = True