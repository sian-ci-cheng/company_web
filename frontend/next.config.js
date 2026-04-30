/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // 僅本地開發（npm run dev）使用此 rewrite 將 /api/* 轉發至 backend
  // Docker 環境中由 Nginx 負責路由，此處不作用
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL
    if (!backendUrl) return []
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
