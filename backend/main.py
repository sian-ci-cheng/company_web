from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from routers import auth, company, health

app = FastAPI(title="ONT API", docs_url="/api/docs", redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(company.router)
app.include_router(health.router)


@app.get("/api/ping")
async def ping():
    return {"status": "ok"}
