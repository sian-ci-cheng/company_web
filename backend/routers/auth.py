from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from database import get_db
from models import User
from auth import verify_password, create_access_token, get_current_user

router = APIRouter(prefix="/api/auth", tags=["auth"])


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str


class MeResponse(BaseModel):
    id: int
    username: str
    email: str
    role: str


@router.post("/login", response_model=TokenResponse)
async def login(form: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.username == form.username))
    user = result.scalar_one_or_none()
    if not user or not verify_password(form.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")
    if not user.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account disabled")

    user.last_login = datetime.utcnow()
    await db.commit()

    token = create_access_token({"sub": str(user.id)})
    return TokenResponse(access_token=token, role=user.role)


@router.get("/me", response_model=MeResponse)
async def me(current_user: User = Depends(get_current_user)):
    return MeResponse(
        id=current_user.id,
        username=current_user.username,
        email=current_user.email,
        role=current_user.role,
    )
