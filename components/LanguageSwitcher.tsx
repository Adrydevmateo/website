'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LOCALE_LABELS: Record<string, string> = {
  en: 'EN', es: 'ES', it: 'IT', pt: 'PT', ja: 'JA',
}

const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ja: '日本語',
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const switchLocale = (loc: string) => {
    router.replace(pathname, { locale: loc })
    setOpen(false)
  }

  return (
    <div ref={ref} className="hidden md:block relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 border rounded-full text-[11px] font-bold tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap ${
          open
            ? 'text-green-400 border-green-500/40 bg-slate-800/80'
            : 'text-slate-400 hover:text-slate-200 border-slate-700/50 hover:border-slate-600'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        {LOCALE_LABELS[locale]}
        <ChevronDown
          size={11}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full right-0 mt-2 w-36 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-50"
            role="listbox"
            aria-label="Language options"
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                role="option"
                aria-selected={locale === loc}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-100 cursor-pointer ${
                  locale === loc
                    ? 'text-green-400 bg-green-500/8'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                <span className="font-bold text-[10px] tracking-wider w-6 text-left text-slate-500">
                  {LOCALE_LABELS[loc]}
                </span>
                <span
                  className="flex-1 text-left text-xs"
                  style={loc === 'ja' ? { fontFamily: 'var(--font-noto-sans-jp)' } : undefined}
                >
                  {LOCALE_NAMES[loc]}
                </span>
                {locale === loc && <Check size={11} className="text-green-400 flex-shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
