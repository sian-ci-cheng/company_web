'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { login } from '@/lib/api'
import { saveAuth } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw]     = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { access_token, role } = await login(username, password)
      saveAuth(access_token, role)
      router.push('/dashboard')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : '登入失敗，請重試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-ont-black flex items-center justify-center px-4">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-ont-orange mb-4 shadow-lg">
            <span className="text-white font-bold text-xl tracking-tight">ONT</span>
          </div>
          <h1 className="text-white font-semibold text-lg tracking-wide">永誠發科技</h1>
          <p className="text-ont-text-secondary text-sm mt-0.5">Omni Nexus Tech</p>
        </div>

        {/* Card */}
        <div className="ont-card p-8">
          <h2 className="text-white font-medium text-sm mb-6 uppercase tracking-widest text-center">
            管理後台登入
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-xs text-ont-text-secondary mb-1.5 uppercase tracking-wider">
                帳號
              </label>
              <input
                className="ont-input"
                type="text"
                autoComplete="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="輸入帳號"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs text-ont-text-secondary mb-1.5 uppercase tracking-wider">
                密碼
              </label>
              <div className="relative">
                <input
                  className="ont-input pr-10"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="輸入密碼"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ont-text-dim hover:text-ont-text-secondary transition-colors"
                  onClick={() => setShowPw(v => !v)}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="ont-btn-primary mt-2 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={15} className="animate-spin" />}
              {loading ? '登入中...' : '登入'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-ont-text-dim text-xs text-center mt-6">
          © {new Date().getFullYear()} Omni Nexus Tech · 02-27588857
        </p>
      </div>
    </div>
  )
}
