'use client'
import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="border-t border-ont-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-ont-orange">
            <span className="text-white font-bold text-[9px]">ONT</span>
          </div>
          <span className="text-ont-text-secondary text-sm">
            {lang === 'zh' ? '永誠發科技 / Omni Nexus Tech' : 'Omni Nexus Tech / 永誠發科技'}
          </span>
        </div>
        <p className="text-ont-text-dim text-xs">
          Tel: 02-27588857 &nbsp;·&nbsp; © {new Date().getFullYear()} ONT. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
