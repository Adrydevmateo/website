'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, GraduationCap, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 1.02, 0.73, 1.0] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export function About() {
  const t = useTranslations('about')

  const stats = [
    { value: '2+', label: t('stat0_label'), color: 'text-green-400' },
    { value: '3', label: t('stat1_label'), color: 'text-blue-400' },
    { value: '20+', label: t('stat2_label'), color: 'text-violet-400' },
    { value: '3', label: t('stat3_label'), color: 'text-amber-400' },
  ]

  const certifications = [t('cert0'), t('cert1'), t('cert2')]

  const experience = [
    {
      period: t('exp0_period'),
      role: t('exp0_role'),
      company: t('exp0_company'),
      location: t('exp0_location'),
      description: t('exp0_desc'),
      tags: ['React', 'Next.js', 'React Native', 'FastAPI', 'PostgreSQL', 'AI/LLM'],
    },
    {
      period: t('exp1_period'),
      role: t('exp1_role'),
      company: t('exp1_company'),
      location: t('exp1_location'),
      description: t('exp1_desc'),
      tags: ['Vue.js', 'Python', 'Docker', 'MySQL', 'QT'],
    },
    {
      period: t('exp2_period'),
      role: t('exp2_role'),
      company: t('exp2_company'),
      location: t('exp2_location'),
      description: t('exp2_desc'),
      tags: ['Vue.js', 'NestJS', 'Supabase', 'Cypress', 'Bit'],
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={stagger} className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-green-500 text-sm font-semibold tracking-[0.2em] uppercase">
            {t('label')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading font-black text-4xl sm:text-5xl text-slate-50 mt-3">
            {t('heading')}
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Bio */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            variants={stagger} className="space-y-8"
          >
            {/* Avatar + identity */}
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500 via-green-400/50 to-blue-600/40 opacity-60 blur-sm" />
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-green-500/20 via-slate-800 to-blue-600/10 border border-slate-700 flex items-center justify-center">
                  <span className="font-heading font-black text-4xl gradient-text">AM</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-[#0F172A] rounded-full" />
              </div>

              <div className="pt-1">
                <h3 className="font-heading font-bold text-xl text-slate-100">Adry Mateo Ramon</h3>
                <p className="text-green-400 font-medium text-sm mt-0.5">{t('subtitle')}</p>
                <div className="flex items-center gap-1.5 mt-2 text-slate-500 text-sm">
                  <MapPin size={13} />
                  <span>{t('location')}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs text-slate-500 font-medium">
                    {t('lang_spanish')}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs text-slate-500 font-medium">
                    {t('lang_english')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                {t.rich('bio1', {
                  strong: (chunks) => (
                    <span className="text-green-400 font-semibold">{chunks}</span>
                  ),
                })}
              </p>
              <p className="text-slate-400 leading-relaxed">{t('bio2')}</p>
              <p className="text-slate-400 leading-relaxed">{t('bio3')}</p>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold text-sm">{t('education_title')}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t('education_school')}</p>
                  <p className="text-slate-600 text-xs mt-1">{t('education_details')}</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Award size={15} className="text-amber-400" />
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {t('certs_label')}
                </p>
              </div>
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div variants={fadeInUp}>
              <a
                href="/cv.pdf"
                className="group inline-flex items-center gap-2.5 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-medium rounded-xl transition-all duration-200 cursor-pointer text-sm"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                {t('download_cv')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats + Timeline */}
          <div className="space-y-10">

            {/* Stats */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={stagger} className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="relative p-5 bg-slate-800/50 border border-slate-700/70 rounded-2xl overflow-hidden group card-hover"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/60 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`font-heading font-black text-3xl leading-none ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-2 leading-tight whitespace-pre-line">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.h3 variants={fadeInUp} className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
                {t('experience_label')}
              </motion.h3>
              <div className="space-y-0">
                {experience.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < experience.length - 1 && (
                      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-slate-800" />
                    )}
                    <div className="relative mt-1 flex-shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-green-500 bg-[#0F172A]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-600 font-mono mb-0.5">{item.period}</p>
                      <p className="font-semibold text-slate-200 text-sm leading-tight">{item.role}</p>
                      <p className="text-green-500/80 text-xs font-medium mt-0.5">{item.company}</p>
                      <p className="text-slate-600 text-xs">{item.location}</p>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-900/60 border border-slate-700/40 rounded text-xs text-slate-600 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
