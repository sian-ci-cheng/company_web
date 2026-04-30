import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: '永誠發科技 | Omni Nexus Tech',
  description: '無人機系統整合代理商',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
