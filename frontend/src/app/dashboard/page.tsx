'use client'

import { Server, Mail, Activity, Users, Wifi, WifiOff } from 'lucide-react'
import useSWR from 'swr'
import { api } from '@/lib/api'
import { clsx } from 'clsx'

interface HealthData {
  status: string
  uptime_seconds: number
  database: string
}

function formatUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const parts = []
  if (d > 0) parts.push(`${d}d`)
  if (h > 0) parts.push(`${h}h`)
  parts.push(`${m}m`)
  return parts.join(' ')
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  accent?: boolean
}) {
  return (
    <div className="ont-card p-5 flex items-center gap-4">
      <div
        className={clsx(
          'flex items-center justify-center w-11 h-11 rounded-lg shrink-0',
          accent ? 'bg-ont-orange/15 text-ont-orange' : 'bg-ont-surface text-ont-text-secondary',
        )}
      >
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <p className="text-ont-text-secondary text-xs uppercase tracking-wider">{label}</p>
        <p className="text-white font-semibold text-xl font-mono mt-0.5">{value}</p>
      </div>
    </div>
  )
}

function StatusDot({ online }: { online: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      {online && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
      )}
      <span
        className={clsx(
          'relative inline-flex rounded-full h-2.5 w-2.5',
          online ? 'bg-green-400' : 'bg-red-400',
        )}
      />
    </span>
  )
}

export default function DashboardPage() {
  const { data: health, isLoading } = useSWR<HealthData>(
    '/health',
    (path: string) => api.get(path),
    { refreshInterval: 30_000 },
  )

  const dbOnline = health?.database === 'connected'

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white font-semibold text-2xl">總覽</h1>
        <p className="text-ont-text-secondary text-sm mt-1">系統狀態與數據摘要</p>
      </div>

      {/* System status bar */}
      <div className="ont-card px-5 py-3.5 mb-6 flex items-center gap-6 flex-wrap">
        <span className="text-xs uppercase tracking-widest text-ont-text-secondary font-medium">
          系統狀態
        </span>

        <div className="flex items-center gap-2">
          <StatusDot online={!isLoading && dbOnline} />
          <span className="text-sm text-ont-text-secondary">
            資料庫
            <span className={clsx('ml-1.5 font-medium', dbOnline ? 'text-green-400' : 'text-red-400')}>
              {isLoading ? '—' : dbOnline ? '正常' : '離線'}
            </span>
          </span>
        </div>

        {health && (
          <div className="flex items-center gap-2 text-sm text-ont-text-secondary">
            <Activity size={13} />
            <span>
              上線時間
              <span className="ml-1.5 text-white font-mono">{formatUptime(health.uptime_seconds)}</span>
            </span>
          </div>
        )}

        <div className="ml-auto flex items-center gap-1.5 text-xs text-ont-text-dim">
          {dbOnline ? <Wifi size={13} /> : <WifiOff size={13} />}
          每 30 秒自動更新
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Server}   label="資產總數"   value="—" />
        <StatCard icon={Mail}     label="未讀聯絡"   value="—" accent />
        <StatCard icon={Users}    label="帳號數量"   value="—" />
        <StatCard icon={Activity} label="系統健康度" value={health ? (dbOnline ? '100%' : '—') : '—'} />
      </div>

      {/* Quick links */}
      <div className="ont-card p-5">
        <h2 className="text-white font-medium text-sm mb-4 uppercase tracking-widest">快速導覽</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/dashboard/company',  label: '編輯公司資訊', color: 'hover:border-ont-orange' },
            { href: '/dashboard/assets',   label: '資產管理',     color: 'hover:border-blue-500' },
            { href: '/dashboard/contacts', label: '聯絡紀錄',     color: 'hover:border-yellow-500' },
            { href: '/dashboard/health',   label: '詳細系統狀態', color: 'hover:border-green-500' },
          ].map(({ href, label, color }) => (
            <a
              key={href}
              href={href}
              className={clsx(
                'block p-3 rounded border border-ont-border bg-ont-surface text-ont-text-secondary',
                'hover:text-white text-sm transition-all duration-150',
                color,
              )}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
