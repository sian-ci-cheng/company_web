# Omni Nexus Tech — 公司官網

## Branch 說明

| Branch | 用途 |
|--------|------|
| `master` | 主開發分支，存放所有原始碼 |
| `github` | 部署分支，存放 build 好的靜態檔案，供 GitHub Pages 發佈網站使用 |

> `github` 分支由 `npx gh-pages -d dist -b github` 自動產生，請勿手動編輯。

---

## 本地開發

**環境需求：** Node.js（建議 LTS 版本，至 [nodejs.org](https://nodejs.org) 下載）

1. 安裝套件：
   ```bash
   npm install
   ```
2. 設定環境變數：將 `.env.example` 複製為 `.env.local`，並填入 `GEMINI_API_KEY`
   ```bash
   # macOS / Linux
   cp .env.example .env.local

   # Windows (CMD)
   copy .env.example .env.local
   ```

3. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

4. 開啟瀏覽器前往 **http://localhost:3000**

> **Windows 注意事項：** 若防火牆跳出詢問視窗，請選「允許存取」。若 3000 port 已被佔用，Vite 會自動改用 3001、3002 等，請依終端機顯示的網址開啟。

## 部署網站

```bash
npm run build
npx gh-pages -d dist -b github --remote origin
```

執行後 GitHub Pages 會自動更新網站內容。
