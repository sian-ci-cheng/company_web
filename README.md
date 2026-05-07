# Omni Nexus Tech — 公司官網

## Branch 說明

| Branch | 用途 |
|--------|------|
| `master` | 主開發分支，存放所有原始碼 |
| `github` | 部署分支，存放 build 好的靜態檔案，供 GitHub Pages 發佈網站使用 |

> `github` 分支由 `npx gh-pages -d dist -b github` 自動產生，請勿手動編輯。

---

## 本地開發

**環境需求：** Node.js

1. 安裝套件：
   ```bash
   npm install
   ```
2. 設定環境變數，將 `GEMINI_API_KEY` 填入 `.env.local`

3. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## 部署網站

```bash
npm run build
npx gh-pages -d dist -b github --remote origin
```

執行後 GitHub Pages 會自動更新網站內容。
