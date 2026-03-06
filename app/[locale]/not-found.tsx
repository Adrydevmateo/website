import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="font-heading font-black text-[8rem] leading-none text-slate-800 select-none">
          404
        </div>
        <h1 className="font-heading font-bold text-2xl text-slate-200">{t('title')}</h1>
        <p className="text-slate-500 leading-relaxed">{t('description')}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
        >
          {t('back_home')}
        </Link>
      </div>
    </main>
  )
}
