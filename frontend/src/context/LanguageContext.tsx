'use client'
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'zh' | 'en'
interface Ctx { lang: Lang; toggle: () => void }
const LangCtx = createContext<Ctx>({ lang: 'zh', toggle: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  useEffect(() => {
    const s = localStorage.getItem('ont-lang') as Lang | null
    if (s === 'zh' || s === 'en') setLang(s)
  }, [])
  const toggle = () =>
    setLang(prev => {
      const next: Lang = prev === 'zh' ? 'en' : 'zh'
      localStorage.setItem('ont-lang', next)
      return next
    })
  return <LangCtx.Provider value={{ lang, toggle }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
