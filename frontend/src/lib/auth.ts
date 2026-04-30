const TOKEN_KEY = 'ont_token'
const ROLE_KEY  = 'ont_role'

export function saveAuth(token: string, role: string) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(ROLE_KEY, role)
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

export function getRole(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(ROLE_KEY)
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(ROLE_KEY)
}

export function isAuthenticated(): boolean {
  return !!getToken()
}
