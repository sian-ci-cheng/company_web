import { getToken } from './auth'

const BASE = '/api'

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getToken()
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(init.headers ?? {}),
  }

  const res = await fetch(`${BASE}${path}`, { ...init, headers })

  if (res.status === 401) {
    window.location.href = '/login'
    throw new Error('Unauthorized')
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(err.detail ?? 'Request failed')
  }

  return res.json() as Promise<T>
}

export const api = {
  get:   <T>(path: string) => request<T>(path),
  post:  <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
}

export async function login(username: string, password: string) {
  const form = new URLSearchParams({ username, password })
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: '登入失敗' }))
    throw new Error(err.detail)
  }
  return res.json() as Promise<{ access_token: string; role: string }>
}
