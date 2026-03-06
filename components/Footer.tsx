'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

const socialIcons = [
  { icon: Github, href: 'https://github.com/adrydev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adrydev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:adrydevmateo@gmail.com', label: 'Email' },
]

const NAV_HREFS = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#work', key: 'work' },
  { href: '#contact', key: 'contact' },
] as const

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="relative border-t border-slate-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <a href="#home" className="flex items-center gap-2.5 group cursor-pointer" aria-label="Back to top">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-green-500/15 group-hover:bg-green-500/25 transition-colors" />
                <div className="absolute inset-0 rounded-full border border-green-500/50 group-hover:border-green-400/80 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center text-green-400 font-heading font-bold text-xs">AM</span>
              </div>
              <span className="font-heading font-bold text-slate-300 group-hover:text-white transition-colors">Adry Ramon</span>
            </a>
            <p className="text-slate-600 text-sm max-w-xs text-center md:text-left">
              {t('tagline')}
            </p>
          </motion.div>

          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-1"
            aria-label="Footer navigation"
          >
            {NAV_HREFS.map((link) => (
              <a key={link.href} href={link.href}
                className="px-3 py-1.5 text-slate-500 hover:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 cursor-pointer">
                {tNav(link.key)}
              </a>
            ))}
          </motion.nav>

          {/* Socials + scroll top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer" aria-label={label}
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-slate-500 hover:text-slate-200 transition-all duration-200 hover:scale-110 cursor-pointer">
                <Icon size={16} />
              </a>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-1" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-green-500/10 border border-slate-700/50 hover:border-green-500/30 text-slate-500 hover:text-green-400 transition-all duration-200 cursor-pointer"
            >
              <ArrowUp size={16} />
            </button>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">© {new Date().getFullYear()} Adry Mateo Ramon · adrydevmateo@gmail.com</p>
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            <span className="flex items-center gap-1.5">
              {t.rich('built_with', {
                heart: () => <Heart size={11} className="text-red-500/60 fill-red-500/60" aria-hidden="true" />,
              })}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
