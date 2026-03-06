'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, Linkedin } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Project = {
  title: string
  description: string
  longDescription: string
  tags: string[]
  gradient: string
  github: string
  live: string
  featured?: boolean
}

function ProjectCard({ project, index, codeLabel, viewLabel, featuredLabel, productionLabel }: {
  project: Project
  index: number
  codeLabel: string
  viewLabel: string
  featuredLabel: string
  productionLabel: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden card-hover flex flex-col"
    >
      {/* Visual */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-heading font-black text-4xl text-white/4 select-none text-center px-4 leading-tight">
            {project.title.toUpperCase()}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-lg px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <code className="text-xs text-green-400 font-mono">{productionLabel}</code>
          </div>
        </motion.div>

        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-slate-900 text-xs font-bold rounded-full">
            {featuredLabel}
          </div>
        )}

        {/* Hover overlay — desktop only */}
        <div className="hidden md:flex absolute inset-0 bg-slate-900/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-xl font-medium text-sm transition-all duration-150 cursor-pointer"
          >
            <Github size={15} /> {codeLabel}
          </a>
          <a
            href={project.live}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-400 text-slate-900 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer"
          >
            <ExternalLink size={15} /> {viewLabel}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight size={18} className="text-slate-600 group-hover:text-green-400 transition-colors flex-shrink-0 mt-0.5" />
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.longDescription}
        </p>

        {/* Mobile action buttons */}
        <div className="flex items-center gap-2 mt-4 md:hidden">
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 hover:bg-slate-800 border border-slate-700/50 text-slate-300 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer"
          >
            <Github size={13} /> {codeLabel}
          </a>
          <a
            href={project.live}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-green-500 hover:bg-green-400 text-slate-900 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer"
          >
            <ExternalLink size={13} /> {viewLabel}
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-slate-900/60 border border-slate-700/50 rounded-lg text-xs text-slate-500 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const t = useTranslations('projects')

  const projects: Project[] = [
    {
      title: t('proj0_title'),
      description: t('proj0_desc'),
      longDescription: t('proj0_long'),
      tags: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'LLM', 'AI'],
      gradient: 'from-emerald-900/70 to-green-900/40',
      github: 'https://github.com/adrydev',
      live: 'https://www.linkedin.com/in/adrydev/',
      featured: true,
    },
    {
      title: t('proj1_title'),
      description: t('proj1_desc'),
      longDescription: t('proj1_long'),
      tags: ['Vue.js', 'Python', 'Docker', 'MySQL', 'QT', 'REST API'],
      gradient: 'from-blue-900/70 to-cyan-900/40',
      github: 'https://github.com/adrydev',
      live: 'https://www.linkedin.com/in/adrydev/',
      featured: true,
    },
    {
      title: t('proj2_title'),
      description: t('proj2_desc'),
      longDescription: t('proj2_long'),
      tags: ['Vue.js', 'NestJS', 'Supabase', 'Cypress', 'Bit', 'Vitest'],
      gradient: 'from-violet-900/70 to-purple-900/40',
      github: 'https://github.com/adrydev',
      live: 'https://www.linkedin.com/in/adrydev/',
    },
    {
      title: t('proj3_title'),
      description: t('proj3_desc'),
      longDescription: t('proj3_long'),
      tags: ['React Native', 'Express.js', 'JWT', 'iOS', 'Android'],
      gradient: 'from-orange-900/70 to-amber-900/40',
      github: 'https://github.com/adrydev',
      live: 'https://www.linkedin.com/in/adrydev/',
    },
  ]

  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-500 text-sm font-semibold tracking-[0.2em] uppercase">{t('label')}</span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-50 mt-3">{t('heading')}</h2>
            <p className="text-slate-500 mt-3 max-w-md leading-relaxed">{t('subheading')}</p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://www.linkedin.com/in/adrydev/"
            target="_blank" rel="noopener noreferrer"
            className="group flex-shrink-0 flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-100 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
          >
            <Linkedin size={16} />
            {t('linkedin_btn')}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              codeLabel={t('code_btn')}
              viewLabel={t('view_btn')}
              featuredLabel={t('featured')}
              productionLabel={t('production_ready')}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/adrydev"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-green-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            <span>{t('more_github')}</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
