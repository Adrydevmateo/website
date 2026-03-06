'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

type Skill = { name: string; level: number }
type Category = {
  title: string
  tag: string
  tagColor: string
  description: string
  skills: Skill[]
}

const dotCount = 10

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const filled = Math.round((skill.level / 100) * dotCount)
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center justify-between gap-3 group"
    >
      <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors flex-1 font-medium">
        {skill.name}
      </span>
      <div className="flex items-center gap-1 flex-shrink-0">
        {Array.from({ length: dotCount }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i < filled ? 'bg-green-500' : 'bg-slate-700'}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

const practices = [
  'Agile / Scrum', 'Clean Architecture', 'Domain-Driven Design', 'OOP',
  'Bit Microfrontend', 'AI Code Review', 'GitHub', 'Notion', 'Slack', 'DecapCMS',
]

export function Skills() {
  const t = useTranslations('skills')

  const categories: Category[] = [
    {
      title: t('cat0_title'),
      tag: t('cat0_tag'),
      tagColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      description: t('cat0_desc'),
      skills: [
        { name: 'React.js & Next.js', level: 97 },
        { name: 'Vue.js & Nuxt', level: 88 },
        { name: 'TypeScript', level: 93 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'React Native & Ionic', level: 80 },
      ],
    },
    {
      title: t('cat1_title'),
      tag: t('cat1_tag'),
      tagColor: 'bg-green-500/10 border-green-500/20 text-green-400',
      description: t('cat1_desc'),
      skills: [
        { name: 'Node.js · Express · NestJS', level: 90 },
        { name: 'Python · FastAPI · Django', level: 85 },
        { name: 'PostgreSQL & MySQL', level: 88 },
        { name: 'MongoDB · Redis · Supabase', level: 82 },
        { name: 'RESTful API Design', level: 93 },
      ],
    },
    {
      title: t('cat2_title'),
      tag: t('cat2_tag'),
      tagColor: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
      description: t('cat2_desc'),
      skills: [
        { name: 'Claude Code & GitHub Copilot', level: 95 },
        { name: 'LLM Integration & Workflows', level: 85 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'AI Pair Programming', level: 92 },
        { name: 'ChatGPT · DeepSeek · OpenCode', level: 90 },
      ],
    },
    {
      title: t('cat3_title'),
      tag: t('cat3_tag'),
      tagColor: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      description: t('cat3_desc'),
      skills: [
        { name: 'Docker & Containerization', level: 85 },
        { name: 'CI/CD Automation', level: 82 },
        { name: 'Cypress & Playwright', level: 85 },
        { name: 'Linux & Bash', level: 80 },
        { name: 'Vitest & TDD Principles', level: 83 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/3 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-green-500 text-sm font-semibold tracking-[0.2em] uppercase">{t('label')}</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-50 mt-3">{t('heading')}</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">{t('subheading')}</p>
        </motion.div>

        {/* 2×2 Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="relative p-6 rounded-2xl border border-slate-700/60 bg-slate-800/40 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/5 to-transparent rounded-2xl" />

              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-3 ${cat.tagColor}`}>
                  <span className="text-xs font-bold">{cat.tag}</span>
                </div>
                <h3 className="font-heading font-bold text-slate-200 text-base mb-1">{cat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={catIdx * 0.08 + i * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practices & Tooling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
        >
          <p className="text-center text-xs font-semibold text-slate-600 uppercase tracking-widest mb-6">
            {t('practices_label')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {practices.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.04 }}
                className="px-4 py-2 bg-slate-800/80 border border-slate-700/60 rounded-full text-sm text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-all duration-200 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
