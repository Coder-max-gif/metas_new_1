from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class LicenseGenerate(BaseModel):
    user_id: str
    plan: str = Field(pattern="^(indicator|algorithm|bundle)$")

class LicenseVerify(BaseModel):
    license_key: str
    mt5_account: str
    machine_id: str

class LicenseResponse(BaseModel):
    valid: bool
    plan: Optional[str] = None
    expires: Optional[datetime] = None
    message: Optional[str] = None

class LicenseInDB(BaseModel):
    id: str
    user_id: str
    key: str
    plan: str
    active: bool = True
    mt5_account: Optional[str] = None
    machine_id: Optional[str] = None
    last_ping: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)