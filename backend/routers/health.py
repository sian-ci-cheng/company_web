import time
import os
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from database import get_db
from models import User
from auth import get_current_user

router = APIRouter(prefix="/api/health", tags=["health"])

START_TIME = time.time()


@router.get("")
async def health_check(
    _: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    db_ok = False
    try:
        await db.execute(text("SELECT 1"))
        db_ok = True
    except Exception:
        pass

    uptime_seconds = int(time.time() - START_TIME)
    return {
        "status": "ok" if db_ok else "degraded",
        "uptime_seconds": uptime_seconds,
        "database": "connected" if db_ok else "disconnected",
    }
