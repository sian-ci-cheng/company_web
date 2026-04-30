# 永誠發科技 (ONT) 網站系統文檔

**Omni Nexus Tech — 公司官網 + 後台管理系統**

---

## 目錄

1. [系統概覽](#系統概覽)
2. [技術架構](#技術架構)
3. [環境需求](#環境需求)
4. [快速部署](#快速部署)
5. [目錄結構說明](#目錄結構說明)
6. [環境變數設定](#環境變數設定)
7. [資料庫結構](#資料庫結構)
8. [後端 API 文檔](#後端-api-文檔)
9. [前端頁面說明](#前端頁面說明)
10. [Nginx 設定說明](#nginx-設定說明)
11. [開發模式（不使用 Docker）](#開發模式不使用-docker)
12. [常見操作指令](#常見操作指令)
13. [安全注意事項](#安全注意事項)
14. [疑難排解](#疑難排解)

---

## 系統概覽

本系統為永誠發科技的企業網站與後台管理系統，包含：

- **公司官網** — 展示公司簡介、代理品牌（SIYI、ReeBot、Heishatech）、聯絡資訊
- **管理後台** — 員工登入後可管理公司資訊、資產、客戶聯絡紀錄
- **REST API** — FastAPI 後端，支援 JWT 身份驗證

---

## 技術架構

```
使用者瀏覽器
     │
     ▼
Nginx (:80 / :443)
  ├── /api/*  →  FastAPI 後端 (:8000)
  │                    │
  │              PostgreSQL (:5432)
  │
  └── /*      →  Next.js 前端 (:3000)
```

| 層次 | 技術 | 版本 |
|------|------|------|
| 反向代理 | Nginx | alpine |
| 前端框架 | Next.js (App Router) | 14 |
| UI 樣式 | Tailwind CSS | 3 |
| 後端框架 | FastAPI | 0.115 |
| ORM | SQLAlchemy (async) | 2.0 |
| 資料庫 | PostgreSQL | 16 |
| 容器化 | Docker Compose | — |

---

## 環境需求

- **Docker** 20.10+（含 Docker Compose plugin）
- **OpenSSL**（產生 SSL 自簽憑證）
- 建議 RAM：2 GB 以上
- 作業系統：Linux / macOS / Windows (WSL2)

---

## 快速部署

### 1. 複製環境變數範本

```bash
cp .env.example .env
```

開啟 `.env`，填入以下欄位：

```env
DB_PASSWORD=你的強密碼
SECRET_KEY=$(openssl rand -hex 32)
ALLOWED_ORIGINS=https://你的網域
```

### 2. 產生 SSL 憑證

**開發用自簽憑證：**

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/ssl/key.pem \
  -out nginx/ssl/cert.pem \
  -subj "/C=TW/ST=Taipei/O=ONT/CN=localhost"
```

**生產環境建議**使用 Let's Encrypt（Certbot）取得正式憑證，並將 `cert.pem` 與 `key.pem` 放入 `nginx/ssl/`。

### 3. 啟動所有服務

```bash
docker compose up -d --build
```

首次啟動約需 2–3 分鐘（Next.js 建置較慢）。

### 4. 確認服務狀態

```bash
docker compose ps
```

所有服務應顯示 `Up`：

```
ont_db        Up (healthy)
ont_backend   Up
ont_frontend  Up
ont_nginx     Up
```

### 5. 開啟瀏覽器

| 位址 | 內容 |
|------|------|
| `https://localhost/` | 公司官網 |
| `https://localhost/login` | 後台登入 |
| `https://localhost/api/docs` | API 互動文檔 (Swagger UI) |

> 自簽憑證瀏覽器會出現警告，開發環境點「進階 → 繼續前往」即可。

---

## 目錄結構說明

```
company_web/
├── .env                  # 環境變數（gitignore，勿提交）
├── .env.example          # 環境變數範本
├── .gitignore
├── docker-compose.yml    # 服務編排
│
├── backend/              # FastAPI 後端
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── main.py           # 應用程式進入點、CORS 設定
│   ├── config.py         # Pydantic Settings，讀取 .env
│   ├── database.py       # 非同步 SQLAlchemy engine
│   ├── models.py         # ORM 模型定義
│   ├── auth.py           # JWT、密碼雜湊、依賴注入
│   └── routers/
│       ├── auth.py       # POST /api/auth/login, GET /api/auth/me
│       ├── company.py    # GET/PATCH /api/company/info
│       └── health.py     # GET /api/health
│
├── frontend/             # Next.js 前端
│   ├── Dockerfile
│   ├── next.config.js    # standalone 輸出設定
│   ├── tailwind.config.js
│   └── src/
│       ├── app/
│       │   ├── layout.tsx           # 根 layout（HTML head）
│       │   ├── page.tsx             # 公司官網首頁 (/)
│       │   ├── globals.css          # 全域樣式、自訂元件類別
│       │   ├── (public)/layout.tsx  # 官網 Navbar + Footer
│       │   ├── login/page.tsx       # 登入頁面 (/login)
│       │   └── dashboard/
│       │       ├── layout.tsx       # 後台 layout（驗證守衛）
│       │       └── page.tsx         # 後台首頁 (/dashboard)
│       ├── components/
│       │   └── Sidebar.tsx          # 後台左側導覽列
│       └── lib/
│           ├── auth.ts              # localStorage token 工具函式
│           └── api.ts               # fetch 封裝、自動帶入 Bearer token
│
├── database/
│   └── init.sql          # 資料庫初始化腳本（首次啟動自動執行）
│
└── nginx/
    ├── conf.d/
    │   └── default.conf  # HTTP→HTTPS 轉址、反向代理設定
    └── ssl/
        ├── cert.pem      # SSL 憑證（gitignore）
        └── key.pem       # SSL 私鑰（gitignore）
```

---

## 環境變數設定

| 變數 | 說明 | 範例 |
|------|------|------|
| `DB_USER` | PostgreSQL 使用者名稱 | `ont_user`（預設） |
| `DB_PASSWORD` | PostgreSQL 密碼 | `ONT_db_2024!` |
| `SECRET_KEY` | JWT 簽名金鑰（至少 32 bytes） | `openssl rand -hex 32` |
| `ALLOWED_ORIGINS` | CORS 允許來源，逗號分隔 | `https://example.com` |

產生安全的 `SECRET_KEY`：

```bash
openssl rand -hex 32
```

---

## 資料庫結構

資料庫於 `database/init.sql` 中定義，容器首次啟動時自動執行。

### `users` — 帳號與權限

| 欄位 | 型別 | 說明 |
|------|------|------|
| `id` | SERIAL PK | 自增主鍵 |
| `username` | VARCHAR(50) UNIQUE | 登入帳號 |
| `email` | VARCHAR(255) UNIQUE | 電子郵件 |
| `password_hash` | VARCHAR(255) | bcrypt 雜湊 |
| `role` | VARCHAR(20) | `admin` 或 `staff` |
| `is_active` | BOOLEAN | 帳號是否啟用 |
| `last_login` | TIMESTAMPTZ | 上次登入時間 |

### `company_info` — 公司資訊（Key-Value）

| 欄位 | 說明 |
|------|------|
| `key` | 唯一識別鍵（如 `company_name_zh`） |
| `value` | 實際值，後台可動態修改 |
| `label` | 顯示用中文標籤 |
| `is_public` | `true` = 公開 API 可讀取 |

預設鍵值：

| Key | 說明 |
|-----|------|
| `company_name_zh` | 公司名稱（中文） |
| `company_name_en` | 公司名稱（英文） |
| `company_abbr` | 公司縮寫 |
| `phone` | 聯絡電話 |
| `address` | 公司地址 |
| `email` | 聯絡信箱 |
| `founded_year` | 成立年份 |
| `description_zh` | 公司簡介（中文） |
| `description_en` | 公司簡介（英文） |

### `assets` — 資產管理

硬體設備庫存，狀態可為：`active` / `inactive` / `maintenance` / `retired`。

### `contact_records` — 聯絡紀錄

客戶或廠商來信記錄，狀態可為：`unread` / `read` / `replied` / `archived`。

### `audit_logs` — 操作稽核日誌

記錄所有 CRUD 操作、登入事件，含 `user_id`、`action`、`ip_address`、`detail (JSONB)`。

---

## 後端 API 文檔

互動式 Swagger UI：`https://localhost/api/docs`

### 認證

所有需要登入的端點均使用 `Authorization: Bearer <token>` 標頭。

Token 有效期預設為 **8 小時**（可透過 `config.py` 中的 `access_token_expire_minutes` 調整）。

### 端點列表

#### 認證 (`/api/auth`)

| 方法 | 路徑 | 說明 | 權限 |
|------|------|------|------|
| POST | `/api/auth/login` | 登入，取得 JWT token | 公開 |
| GET | `/api/auth/me` | 取得當前使用者資訊 | 需登入 |

**登入請求格式（`application/x-www-form-urlencoded`）：**

```
username=admin&password=Admin@ONT2024
```

**登入回應：**

```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "role": "admin"
}
```

#### 公司資訊 (`/api/company`)

| 方法 | 路徑 | 說明 | 權限 |
|------|------|------|------|
| GET | `/api/company/info` | 取得公開欄位（key-value dict） | 公開 |
| GET | `/api/company/info/all` | 取得所有欄位（含私有） | 需登入 |
| PATCH | `/api/company/info/{key}` | 更新指定欄位 | 僅 Admin |

**更新請求範例：**

```bash
curl -X PATCH https://localhost/api/company/info/phone \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"value": "02-12345678"}'
```

#### 系統健康 (`/api/health`)

| 方法 | 路徑 | 說明 | 權限 |
|------|------|------|------|
| GET | `/api/health` | 服務狀態與資料庫連線 | 需登入 |

**回應範例：**

```json
{
  "status": "ok",
  "uptime_seconds": 3600,
  "database": "connected"
}
```

---

## 前端頁面說明

### 設計系統

UniFi 風格工業 UI，品牌色定義於 `tailwind.config.js`：

| Token | 顏色 | 用途 |
|-------|------|------|
| `ont-orange` | `#FF7710` | 主強調色、按鈕、Active 狀態 |
| `ont-black` | `#1A1A1A` | 頁面背景 |
| `ont-card` | `#252525` | 卡片背景 |
| `ont-surface` | `#2E2E2E` | 次層表面 |
| `ont-border` | `#333333` | 邊框 |

全域 CSS 元件類別（定義於 `globals.css`）：

```css
.ont-input     /* 深色輸入框 */
.ont-btn-primary  /* 橘色按鈕 */
.ont-card      /* 深色卡片 */
.ont-badge     /* 狀態標籤 */
```

### 頁面列表

| 路徑 | 檔案 | 說明 |
|------|------|------|
| `/` | `app/page.tsx` | 公司官網首頁（英雄區塊、品牌展示、聯絡） |
| `/login` | `app/login/page.tsx` | 後台登入頁（JWT 認證） |
| `/dashboard` | `app/dashboard/page.tsx` | 後台首頁（系統狀態、統計卡片） |

### 前端工具函式

**`src/lib/auth.ts`** — Token 管理：

```typescript
saveAuth(token, role)  // 儲存到 localStorage
getToken()             // 讀取 token
getRole()              // 讀取角色 ('admin' | 'staff')
clearAuth()            // 登出，清除所有認證資料
isAuthenticated()      // 檢查是否已登入
```

**`src/lib/api.ts`** — API 請求封裝：

```typescript
api.get('/api/company/info')
api.post('/api/auth/login', data)
api.patch('/api/company/info/phone', { value: '02-...' })
login(username, password)  // 使用 form-urlencoded 格式
```

所有請求自動帶入 Bearer token；收到 401 時自動導回 `/login`。

---

## Nginx 設定說明

設定檔位於 `nginx/conf.d/default.conf`。

**主要功能：**

1. **HTTP → HTTPS 強制轉址**（port 80 → 443）
2. **SSL/TLS**：支援 TLSv1.2 / TLSv1.3
3. **反向代理路由：**
   - `/api/*` → `ont_backend:8000`
   - `/*` → `ont_frontend:3000`（含 WebSocket 支援，供 Next.js HMR 使用）
4. **Gzip 壓縮**：js / css / html / json 自動壓縮

**更換 SSL 憑證：**

將正式憑證放入 `nginx/ssl/`，重啟 nginx：

```bash
docker compose restart nginx
```

---

## 開發模式（不使用 Docker）

### 後端

```bash
cd backend
pip install -r requirements.txt

# 需要本地 PostgreSQL，或先 docker compose up db -d
export DATABASE_URL=postgresql://ont_user:密碼@localhost:5432/ont_db
export SECRET_KEY=$(openssl rand -hex 32)
export ALLOWED_ORIGINS=http://localhost:3000

uvicorn main:app --reload --port 8000
# API docs: http://localhost:8000/api/docs
```

### 前端

```bash
cd frontend
npm install

# 設定後端位址（開發時使用 next.config.js 的 rewrites）
export BACKEND_URL=http://localhost:8000

npm run dev   # http://localhost:3000
npm run lint
npm run build
```

> 本地開發時，`next.config.js` 中的 `rewrites` 會將 `/api/*` 轉發至 `BACKEND_URL`，無需 Nginx。

---

## 常見操作指令

### 服務管理

```bash
# 啟動（背景執行）
docker compose up -d --build

# 停止
docker compose down

# 重啟單一服務
docker compose restart backend

# 查看即時 log
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f nginx
```

### 資料庫操作

```bash
# 進入 PostgreSQL CLI
docker compose exec db psql -U ont_user -d ont_db

# 常用 SQL
\dt                     -- 列出所有資料表
SELECT * FROM users;    -- 查看使用者
SELECT key, value FROM company_info;  -- 查看公司資訊
```

### 新增使用者

在 PostgreSQL CLI 中執行（先產生 bcrypt hash）：

```bash
# 在後端容器中產生 hash
docker compose exec backend python3 -c \
  "from auth import hash_password; print(hash_password('你的密碼'))"
```

然後在 DB 中插入：

```sql
INSERT INTO users (username, email, password_hash, role)
VALUES ('staff01', 'staff01@ont.local', '上面產生的hash', 'staff');
```

### 重置資料庫（破壞性操作）

```bash
docker compose down -v   # 刪除 volume
docker compose up -d --build  # 重新建立並執行 init.sql
```

---

## 安全注意事項

1. **立即更改預設密碼**
   預設管理員帳號 `admin` / `Admin@ONT2024` 請在首次登入後立即修改。

2. **`.env` 不可提交 Git**
   `.env` 已加入 `.gitignore`，請確認 `SECRET_KEY` 與 `DB_PASSWORD` 不外洩。

3. **生產環境 SSL**
   請使用 Let's Encrypt 正式憑證，而非自簽憑證。

4. **ALLOWED_ORIGINS 設定**
   生產環境請設定為實際網域（如 `https://ont.com.tw`），不要保留 `http://localhost`。

5. **JWT Token 有效期**
   預設 8 小時，可在 `backend/config.py` 的 `access_token_expire_minutes` 調整。

6. **定期備份資料庫**
   ```bash
   docker compose exec db pg_dump -U ont_user ont_db > backup_$(date +%Y%m%d).sql
   ```

---

## 疑難排解

### 服務無法啟動

```bash
docker compose logs backend   # 查看錯誤訊息
docker compose logs db
```

**常見原因：**

- `.env` 未建立或 `DB_PASSWORD` 為空
- `nginx/ssl/` 缺少憑證檔案
- Port 80 / 443 已被其他程式佔用

### 登入失敗（Incorrect username or password）

1. 確認資料庫已正確初始化：
   ```bash
   docker compose exec db psql -U ont_user -d ont_db -c "SELECT username, role FROM users;"
   ```
2. 確認 `init.sql` 中的 bcrypt hash 與密碼相符。

### 前端無法呼叫 API

- Docker 環境下：確認 Nginx 正常運作（`docker compose ps`）
- 本地開發：確認 `BACKEND_URL` 環境變數已設定，Next.js rewrites 才會生效

### bcrypt 相容性問題

若出現 `ValueError: password cannot be longer than 72 bytes`，確認 `requirements.txt` 中 bcrypt 版本為 `3.2.2`：

```bash
docker compose exec backend pip show bcrypt
```

若版本不對，重建 backend image：

```bash
docker compose build --no-cache backend
docker compose up -d backend
```

---

*文件版本：2026-04 ｜ 永誠發科技 Omni Nexus Tech*
