from pydantic import BaseModel
from typing import Optional

class ProductResponse(BaseModel):
    id: str
    name: str
    type: str
    price: float
    duration: int
    duration_unit: str
    description: Optional[str] = None
    features: list[str]
    icon: str
