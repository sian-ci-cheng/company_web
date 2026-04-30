-- ============================================================
-- ONT (永誠發科技) 資料庫初始化腳本
-- ============================================================

-- 啟用 UUID 擴充
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- 使用者與權限
-- ============================================================
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(50)  UNIQUE NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role        VARCHAR(20)  NOT NULL DEFAULT 'staff'
                    CHECK (role IN ('admin', 'staff')),
    is_active   BOOLEAN      NOT NULL DEFAULT true,
    last_login  TIMESTAMPTZ,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 公司基本資訊（Key-Value 結構，方便後台動態修改）
-- ============================================================
CREATE TABLE company_info (
    id          SERIAL PRIMARY KEY,
    key         VARCHAR(100) UNIQUE NOT NULL,
    value       TEXT,
    label       VARCHAR(255),           -- 顯示用中文標籤
    is_public   BOOLEAN      NOT NULL DEFAULT true,  -- false = 僅後台可見
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

INSERT INTO company_info (key, value, label, is_public) VALUES
    ('company_name_zh', '永誠發科技',        '公司名稱（中文）', true),
    ('company_name_en', 'Omni Nexus Tech',   '公司名稱（英文）', true),
    ('company_abbr',    'ONT',               '公司縮寫',         true),
    ('phone',           '02-27588857',       '聯絡電話',         true),
    ('address',         '',                  '公司地址',         true),
    ('email',           '',                  '聯絡信箱',         true),
    ('founded_year',    '',                  '成立年份',         true),
    ('description_zh',  '',                  '公司簡介（中文）', true),
    ('description_en',  '',                  '公司簡介（英文）', true);

-- ============================================================
-- 資產管理
-- ============================================================
CREATE TABLE assets (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(255) NOT NULL,
    category      VARCHAR(50),                         -- 'network', 'server', 'peripheral', etc.
    serial_number VARCHAR(100) UNIQUE,
    model         VARCHAR(255),
    status        VARCHAR(20)  NOT NULL DEFAULT 'active'
                      CHECK (status IN ('active', 'inactive', 'maintenance', 'retired')),
    location      VARCHAR(255),
    assigned_to   INT REFERENCES users(id) ON DELETE SET NULL,
    purchase_date DATE,
    notes         TEXT,
    created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 聯絡紀錄（客戶/廠商來信等）
-- ============================================================
CREATE TABLE contact_records (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    company     VARCHAR(255),
    phone       VARCHAR(50),
    email       VARCHAR(255),
    subject     VARCHAR(500),
    message     TEXT,
    status      VARCHAR(20)  NOT NULL DEFAULT 'unread'
                    CHECK (status IN ('unread', 'read', 'replied', 'archived')),
    handled_by  INT REFERENCES users(id) ON DELETE SET NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 操作稽核日誌
-- ============================================================
CREATE TABLE audit_logs (
    id          SERIAL PRIMARY KEY,
    user_id     INT REFERENCES users(id) ON DELETE SET NULL,
    action      VARCHAR(100) NOT NULL,   -- 'CREATE', 'UPDATE', 'DELETE', 'LOGIN', etc.
    table_name  VARCHAR(100),
    record_id   INT,
    detail      JSONB,
    ip_address  INET,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 自動更新 updated_at 的觸發器
-- ============================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_company_info_updated_at
    BEFORE UPDATE ON company_info
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_assets_updated_at
    BEFORE UPDATE ON assets
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_contact_records_updated_at
    BEFORE UPDATE ON contact_records
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================
-- 索引
-- ============================================================
CREATE INDEX idx_audit_logs_user_id    ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);
CREATE INDEX idx_assets_status         ON assets(status);
CREATE INDEX idx_contact_records_status ON contact_records(status);

-- ============================================================
-- 預設管理員帳號（密碼請在首次登入後立即修改）
-- 密碼: Admin@ONT2024  →  bcrypt hash
-- ============================================================
INSERT INTO users (username, email, password_hash, role) VALUES
    ('admin', 'admin@ont.local',
     '$2b$12$RprlDQB3nJ30JBkbY8IZ3uAD4mnLJAk50GopXbIltcSepcZmHM3i.',
     'admin');
