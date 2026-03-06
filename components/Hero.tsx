'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ArrowUpRight, Terminal, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

const techStack = ['React', 'Next.js', 'Vue.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'React Native']

const codeLines = [
  { text: '// AI-assisted · Full Stack · Frontend-first', type: 'comment' },
  { text: '', type: 'blank' },
  { text: 'const adry = {', type: 'code' },
  { text: '  role: "Full Stack Engineer",', type: 'string' },
  { text: '  stack: ["React", "Next.js", "FastAPI"],', type: 'string' },
  { text: '  focus: "AI-assisted development",', type: 'string' },
  { text: '  location: "Dominican Republic",', type: 'string' },
  { text: '  available: true, // open to remote', type: 'green' },
  { text: '}', type: 'code' },
]

function TypeWriter({ roles }: { roles: string[] }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const role = roles[roleIdx]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < role.length) {
            setText(role.slice(0, text.length + 1))
          } else {
            setPaused(true)
            setTimeout(() => { setPaused(false); setDeleting(true) }, 2800)
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1))
          } else {
            setDeleting(false)
            setRoleIdx((i) => (i + 1) % roles.length)
          }
        }
      },
      deleting ? 35 : 75
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx, paused, roles])

  return (
    <span className="text-slate-300 font-body">
      {text}
      <span className="animate-blink text-green-500 ml-0.5">|</span>
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 1.02, 0.73, 1.0], delay },
  }),
}

export function Hero() {
  const t = useTranslations('hero')

  const roles = [t('role0'), t('role1'), t('role2'), t('role3')]

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/0 via-[#0F172A]/20 to-[#0F172A]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-green-500 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[128px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-3 space-y-7">

            {/* Available badge */}
            <motion.div
              initial="hidden" animate="show" custom={0} variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-green-500/10 border border-green-500/25 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">{t('badge')}</span>
            </motion.div>

            {/* Heading */}
            <motion.div initial="hidden" animate="show" custom={0.1} variants={fadeUp}>
              <h1 className="font-heading font-black leading-none tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] text-slate-50">Adry</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] gradient-text">Mateo</span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] text-slate-50">Ramon</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div initial="hidden" animate="show" custom={0.2} variants={fadeUp} className="flex items-center gap-2 min-h-[1.75rem]">
              <span className="text-slate-600 text-lg font-mono">&gt;</span>
              <span className="text-lg"><TypeWriter roles={roles} /></span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial="hidden" animate="show" custom={0.3} variants={fadeUp}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              {t.rich('bio', {
                highlight: (chunks) => (
                  <span className="text-green-400 font-medium">{chunks}</span>
                ),
              })}
            </motion.p>

            {/* CTAs */}
            <motion.div initial="hidden" animate="show" custom={0.4} variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                {t('cta_work')}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {t('cta_contact')}
              </a>
            </motion.div>

            {/* Mobile tech badges */}
            <motion.div
              initial="hidden" animate="show" custom={0.45} variants={fadeUp}
              className="flex flex-wrap gap-2 lg:hidden"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-3 py-1.5 bg-slate-800/70 border border-slate-700/60 rounded-full text-xs text-slate-400 font-medium cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Social + email */}
            <motion.div initial="hidden" animate="show" custom={0.5} variants={fadeUp} className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/adrydev"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-slate-500 hover:text-slate-200 transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrydev/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-slate-500 hover:text-slate-200 transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="mailto:adrydevmateo@gmail.com"
                  aria-label="Email"
                  className="group p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-slate-500 hover:text-slate-200 transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <Mail size={17} />
                </a>
              </div>
              <div className="h-px w-16 bg-slate-700" />
              <span className="text-xs text-slate-600 font-medium tracking-wider">
                adrydevmateo@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right: Terminal Card */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 1.02, 0.73, 1.0] }}
              className="relative"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/10 rounded-2xl" />
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/90 border-b border-slate-700/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1.5 ml-1">
                    <Terminal size={11} className="text-slate-500" />
                    <span className="text-xs text-slate-500 font-mono">~/adry/portfolio.ts</span>
                  </div>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-slate-700 select-none text-xs w-4 text-right flex-shrink-0 mt-1">
                        {i + 1}
                      </span>
                      <span className={
                        line.type === 'comment' ? 'text-slate-600 italic' :
                        line.type === 'string' ? 'text-green-400' :
                        line.type === 'green' ? 'text-green-300' :
                        line.type === 'blank' ? 'text-transparent select-none' :
                        'text-slate-300'
                      }>
                        {line.text || ' '}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-slate-900">
                  <span className="text-xs font-semibold">TypeScript</span>
                  <span className="text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900/60 inline-block" />
                    {t('no_errors')}
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-green-500 text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg shadow-green-500/40"
              >
                {t('open_to_work')}
              </motion.div>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="px-3 py-1.5 bg-slate-800/70 border border-slate-700/60 rounded-full text-xs text-slate-400 font-medium hover:border-green-500/40 hover:text-green-400 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-slate-700 font-medium tracking-[0.25em] uppercase">{t('scroll')}</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={14} className="text-slate-700" />
        </motion.div>
      </motion.div>
    </section>
  )
}
