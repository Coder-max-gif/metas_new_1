from fastapi import APIRouter, Depends, HTTPException, status
from models.license import LicenseGenerate, LicenseVerify, LicenseResponse
from services.license_service import LicenseService
from middleware.auth import get_current_user, get_current_admin

router = APIRouter(prefix="/api/licenses", tags=["Licenses"])
license_service = LicenseService()

@router.post("/generate")
async def generate_license(
    license_data: LicenseGenerate,
    current_user: dict = Depends(get_current_admin)
):
    license_key = await license_service.generate_license(
        license_data.user_id,
        license_data.plan
    )
    
    return {
        "license_key": license_key,
        "user_id": license_data.user_id,
        "plan": license_data.plan
    }

@router.post("/verify", response_model=LicenseResponse)
async def verify_license(verify_data: LicenseVerify):
    result = await license_service.verify_license(
        verify_data.license_key,
        verify_data.mt5_account,
        verify_data.machine_id
    )
    
    return result

@router.get("/my-licenses")
async def get_my_licenses(current_user: dict = Depends(get_current_user)):
    licenses = await license_service.get_user_licenses(current_user["id"])
    return {"licenses": licenses}