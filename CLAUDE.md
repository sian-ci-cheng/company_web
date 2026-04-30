# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

永誠發科技 (Omni Nexus Tech / ONT) company website and management system. UniFi-inspired industrial UI (`#FF7710` accent, `#1A1A1A` background, `#252525` cards) built on Next.js + FastAPI + PostgreSQL, containerized with Docker Compose.

## Common Commands

```bash
# First-time setup
cp .env.example .env          # fill in DB_PASSWORD and SECRET_KEY
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/ssl/key.pem -out nginx/ssl/cert.pem  # self-signed cert for dev

# Start all services
docker compose up -d --build

# View logs
docker compose logs -f backend
docker compose logs -f frontend

# Stop
docker compose down

# Reset DB (destructive)
docker compose down -v && docker compose up -d --build
```

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload          # dev server on :8000
# API docs: http://localhost:8000/api/docs
```

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev        # dev server on :3000
npm run build
npm run lint
```

## Architecture

```
nginx (:80/:443)
  ├── /api/*  → FastAPI backend (:8000)
  └── /*      → Next.js frontend (:3000)
              ↓
         PostgreSQL (:5432)
```

### Backend (`backend/`)

- `main.py` — FastAPI app entry, CORS config, router registration
- `config.py` — Pydantic Settings, reads from `.env`
- `database.py` — async SQLAlchemy engine + `get_db` dependency
- `models.py` — SQLAlchemy ORM models
- `auth.py` — JWT helpers, `get_current_user`, `require_admin` dependencies
- `routers/auth.py` — `POST /api/auth/login`, `GET /api/auth/me`
- `routers/company.py` — public & admin company-info endpoints
- `routers/health.py` — `GET /api/health` (DB status + uptime)

### Database (`database/`)

`init.sql` runs once on first container start. Tables:

| Table | Purpose |
|---|---|
| `users` | Auth, roles (`admin` / `staff`) |
| `company_info` | Key-value store for all public company data |
| `assets` | Hardware/equipment inventory |
| `contact_records` | Inbound enquiries |
| `audit_logs` | Action history |

Default admin: `admin` / `Admin@ONT2024` — **change immediately after first login.**

### Frontend (`frontend/`)

Next.js App Router with Tailwind CSS. Brand colors are defined in `tailwind.config.js`:
- `ont-orange: #FF7710`
- `ont-black: #1A1A1A`
- `ont-card: #252525`

### Nginx (`nginx/conf.d/default.conf`)

HTTP → HTTPS redirect. SSL certs go in `nginx/ssl/cert.pem` + `nginx/ssl/key.pem`.
