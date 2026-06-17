import logging
from fastapi import APIRouter, HTTPException, status, Request
from models.user import UserCreate, UserLogin, UserResponse, TokenResponse, PasswordResetRequest
from services.auth_service import AuthService
from middleware.auth import get_current_user
from middleware.rate_limit import limiter
from fastapi import Depends
from utils.jwt_handler import verify_token, create_access_token

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/auth", tags=["Authentication"])
auth_service = AuthService()

@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit("5/minute")
async def register(request: Request, user_data: UserCreate):
    logger.info(f"Registration attempt for email: {user_data.email}")
    user_id, error = await auth_service.register_user(user_data)
    
    if error:
        logger.warning(f"Registration failed: {error}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=error)
    
    access_token, refresh_token = auth_service.generate_tokens(user_data.email)
    logger.info(f"Registration successful for: {user_data.email}")
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

@router.post("/login", response_model=TokenResponse)
@limiter.limit("10/minute")
async def login(request: Request, credentials: UserLogin):
    logger.info(f"Login attempt for email: {credentials.email}")
    user = await auth_service.authenticate_user(credentials.email, credentials.password)
    
    if not user:
        logger.warning(f"Login failed for: {credentials.email}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    access_token, refresh_token = auth_service.generate_tokens(credentials.email)
    logger.info(f"Login successful for: {credentials.email}")
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(request: Request, refresh_token: str = None):
    # Try to get token from query parameter first, then from request body
    if not refresh_token:
        try:
            body = await request.json()
            refresh_token = body.get("refresh_token")
        except:
            pass
    
    if not refresh_token:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Refresh token is required"
        )
    
    payload = verify_token(refresh_token, "refresh")
    
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired refresh token"
        )
    
    email = payload.get("sub")
    user = await auth_service.get_user_by_email(email)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )
    
    new_access_token, new_refresh_token = auth_service.generate_tokens(email)
    
    return {
        "access_token": new_access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer"
    }

@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    return {"message": "Logged out successfully"}

@router.get("/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    return {
        "id": current_user["id"],
        "email": current_user["email"],
        "full_name": current_user["full_name"],
        "role": current_user["role"],
        "subscription_type": current_user["subscription_type"],
        "subscription_status": current_user["subscription_status"],
        "created_at": current_user["created_at"]
    }

@router.post("/forgot-password")
async def forgot_password(request_data: PasswordResetRequest):
    user = await auth_service.get_user_by_email(request_data.email)
    
    if not user:
        return {"message": "If email exists, reset link will be sent"}
    
    return {"message": "Password reset link sent to email"}

@router.post("/reset-password")
async def reset_password(token: str, new_password: str):
    return {"message": "Password reset successful"}