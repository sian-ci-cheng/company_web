from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from database import get_db
from models import CompanyInfo, User
from auth import get_current_user, require_admin

router = APIRouter(prefix="/api/company", tags=["company"])


class InfoItem(BaseModel):
    key: str
    value: str | None
    label: str | None


class InfoUpdate(BaseModel):
    value: str


@router.get("/info")
async def get_public_info(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CompanyInfo).where(CompanyInfo.is_public == True))
    rows = result.scalars().all()
    return {row.key: row.value for row in rows}


@router.get("/info/all")
async def get_all_info(
    _: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(CompanyInfo))
    rows = result.scalars().all()
    return [InfoItem(key=r.key, value=r.value, label=r.label) for r in rows]


@router.patch("/info/{key}")
async def update_info(
    key: str,
    body: InfoUpdate,
    _: User = Depends(require_admin),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(CompanyInfo).where(CompanyInfo.key == key))
    row = result.scalar_one_or_none()
    if not row:
        raise HTTPException(status_code=404, detail="Key not found")
    row.value = body.value
    await db.commit()
    return {"key": key, "value": body.value}
