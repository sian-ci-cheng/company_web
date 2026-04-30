import PublicLayout from '../(public)/layout'
import Link from 'next/link'

export default function GCSPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="border-b border-ont-border bg-ont-card/30 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#A855F7] text-xs uppercase tracking-widest font-medium mb-2">自主研發</p>
          <h1 className="text-white font-bold text-3xl mb-3">GCS 地面控制站</h1>
          <p className="text-ont-text-secondary text-sm max-w-xl">
            永誠發科技自行開發的地面控制站系統，針對工業無人機任務規劃、即時監控與多機協調設計。
          </p>
        </div>
      </div>

      {/* Coming soon */}
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center justify-center text-center gap-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: '#A855F722', color: '#A855F7' }}
        >
          GCS
        </div>
        <div>
          <h2 className="text-white font-semibold text-xl mb-2">頁面建置中</h2>
          <p className="text-ont-text-secondary text-sm">詳細產品介紹即將上線，敬請期待。</p>
        </div>
        <Link
          href="/#contact"
          className="text-sm px-5 py-2 bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 rounded hover:bg-[#A855F7]/20 transition-colors"
        >
          提前詢問 GCS 方案
        </Link>
        <Link href="/products" className="text-xs text-ont-text-dim hover:text-white transition-colors">
          ← 返回產品總覽
        </Link>
      </div>
    </PublicLayout>
  )
}
