'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  Server,
  Mail,
  Activity,
  Users,
  LogOut,
  ChevronRight,
} from 'lucide-react'
import { clsx } from 'clsx'
import { clearAuth, getRole } from '@/lib/auth'

const NAV_ITEMS = [
  { href: '/dashboard',          icon: LayoutDashboard, label: '總覽' },
  { href: '/dashboard/company',  icon: Building2,       label: '公司資訊' },
  { href: '/dashboard/assets',   icon: Server,          label: '資產管理' },
  { href: '/dashboard/contacts', icon: Mail,            label: '聯絡紀錄' },
  { href: '/dashboard/health',   icon: Activity,        label: '系統狀態' },
]

const ADMIN_ITEMS = [
  { href: '/dashboard/users', icon: Users, label: '帳號管理' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router   = useRouter()
  const role     = getRole()

  function handleLogout() {
    clearAuth()
    router.push('/login')
  }

  function isActive(href: string) {
    if (href === '/dashboard') return pathname === '/dashboard'
    return pathname.startsWith(href)
  }

  return (
    <aside className="flex flex-col w-60 min-h-screen bg-[#111111] border-r border-ont-border shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-ont-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ont-orange shrink-0">
          <span className="text-white font-bold text-xs tracking-tight">ONT</span>
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm leading-tight truncate">永誠發科技</p>
          <p className="text-ont-text-dim text-[10px] leading-tight">Omni Nexus Tech</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 overflow-y-auto">
        <NavSection items={NAV_ITEMS} isActive={isActive} />

        {role === 'admin' && (
          <>
            <div className="mx-4 my-2 border-t border-ont-border" />
            <p className="px-4 pb-1 text-[10px] uppercase tracking-widest text-ont-text-dim font-medium">
              管理員
            </p>
            <NavSection items={ADMIN_ITEMS} isActive={isActive} />
          </>
        )}
      </nav>

      {/* Logout */}
      <div className="border-t border-ont-border p-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded text-ont-text-secondary hover:text-white hover:bg-ont-muted transition-colors text-sm group"
        >
          <LogOut size={16} className="shrink-0" />
          <span>登出</span>
        </button>
      </div>
    </aside>
  )
}

function NavSection({
  items,
  isActive,
}: {
  items: { href: string; icon: React.ElementType; label: string }[]
  isActive: (href: string) => boolean
}) {
  return (
    <ul className="px-2 space-y-0.5">
      {items.map(({ href, icon: Icon, label }) => {
        const active = isActive(href)
        return (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded text-sm transition-all duration-100 group relative',
                active
                  ? 'bg-ont-orange/10 text-ont-orange font-medium'
                  : 'text-ont-text-secondary hover:text-white hover:bg-ont-muted',
              )}
            >
              {active && (
                <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-ont-orange rounded-full" />
              )}
              <Icon size={16} className="shrink-0" />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight size={12} className="text-ont-orange" />}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
