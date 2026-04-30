'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { isAuthenticated } from '@/lib/auth'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
    }
  }, [router])

  if (typeof window !== 'undefined' && !isAuthenticated()) return null

  return (
    <div className="flex min-h-screen bg-ont-black">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
