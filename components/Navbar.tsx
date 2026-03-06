'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'

const LOCALE_LABELS: Record<string, string> = {
  en: 'EN', es: 'ES', it: 'IT', pt: 'PT', ja: 'JA',
}

function MobileLanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
              locale === loc ? 'text-green-400' : 'text-slate-500 hover:text-slate-300 cursor-pointer'
            }`}
          >
            {LOCALE_LABELS[loc]}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="text-slate-700 text-[9px] select-none">·</span>
          )}
        </span>
      ))}
    </>
  )
}

export function Navbar() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const NAV_LINKS = [
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#work', label: t('work') },
    { href: '#contact', label: t('contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'work', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isActive = (href: string) => activeSection === href.slice(1)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 1.02, 0.73, 1.0] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`
            flex items-center justify-between gap-4 px-5 py-2.5 rounded-full border
            transition-all duration-500 w-full max-w-3xl
            ${
              scrolled
                ? 'bg-[#0F172A]/90 backdrop-blur-2xl border-slate-700/70 shadow-2xl shadow-black/40'
                : 'bg-[#0F172A]/50 backdrop-blur-md border-slate-700/40'
            }
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Home"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors" />
              <div className="absolute inset-0 rounded-full border border-green-500/60 group-hover:border-green-400 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center text-green-400 font-heading font-bold text-xs">
                AM
              </span>
            </div>
            <span className="hidden sm:block text-slate-300 font-heading font-semibold text-sm group-hover:text-white transition-colors">
              Adry Ramon
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap
                  ${
                    isActive(link.href)
                      ? 'text-green-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }
                `}
              >
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-green-500/10 border border-green-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-px cursor-pointer"
            >
              {t('hire')}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-all duration-200 cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-[#0F172A]/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl p-3 shadow-2xl shadow-black/50 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer
                    ${
                      isActive(link.href)
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-center gap-0.5 py-1">
                  <MobileLanguageSwitcher />
                </div>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold rounded-xl transition-colors text-sm cursor-pointer"
                >
                  {t('hire')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
