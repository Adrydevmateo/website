'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { sendContact } from '@/app/actions/contact'
import { useTranslations } from 'next-intl'

type FormState = { name: string; email: string; subject: string; message: string }
const initialForm: FormState = { name: '', email: '', subject: '', message: '' }

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const t = useTranslations('contact')
  const [form, setForm] = useState<FormState>(initialForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const contactInfo = [
    { icon: Mail, label: t('info_email_label'), value: 'adrydevmateo@gmail.com', href: 'mailto:adrydevmateo@gmail.com' },
    { icon: MapPin, label: t('info_location_label'), value: t('info_location_value'), href: null },
    { icon: Clock, label: t('info_availability_label'), value: t('info_availability_value'), href: null },
  ]

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrydev/', username: 'linkedin.com/in/adrydev' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/adrydev', username: 'github.com/adrydev' },
    { icon: Mail, label: 'Email', href: 'mailto:adrydevmateo@gmail.com', username: 'adrydevmateo@gmail.com' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(t('err_required'))
      return
    }
    if (!EMAIL_REGEX.test(form.email)) {
      setError(t('err_email'))
      return
    }
    setSending(true)
    const result = await sendContact(form)
    setSending(false)
    if (result.success) {
      setSent(true)
      setForm(initialForm)
    } else {
      setError(result.error)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 focus:border-green-500 rounded-xl text-slate-200 placeholder-slate-600 text-sm transition-all duration-200 outline-none focus:ring-1 focus:ring-green-500/30'

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 text-sm font-semibold tracking-[0.2em] uppercase">{t('label')}</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-50 mt-3">
            {t('heading')}
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto leading-relaxed">
            {t('subheading')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-300 hover:text-green-400 transition-colors text-sm font-medium cursor-pointer">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-3">{t('find_online')}</p>
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/40 hover:border-slate-600/60 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-slate-600 transition-colors">
                      <Icon size={16} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{social.label}</p>
                      <p className="text-slate-600 text-xs">{social.username}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-500/5 border border-green-500/15 rounded-xl">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.rich('response_note', {
                  highlight: (chunks) => (
                    <span className="text-green-400 font-medium">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative p-7 bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-100">{t('form_success_title')}</h3>
                  <p className="text-slate-400 text-sm max-w-sm">{t('form_success_body')}</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 px-5 py-2 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    {t('form_send_another')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        {t('form_name')} <span className="text-green-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t('form_name_placeholder')}
                        className={inputClass}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        {t('form_email')} <span className="text-green-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t('form_email_placeholder')}
                        className={inputClass}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {t('form_subject')}
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="bg-slate-900">{t('form_subject_default')}</option>
                      <option value="Full-time Position" className="bg-slate-900">{t('form_subject_fulltime')}</option>
                      <option value="Freelance Project" className="bg-slate-900">{t('form_subject_freelance')}</option>
                      <option value="Collaboration" className="bg-slate-900">{t('form_subject_collab')}</option>
                      <option value="Other" className="bg-slate-900">{t('form_subject_other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {t('form_message')} <span className="text-green-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('form_message_placeholder')}
                      rows={6}
                      className={`${inputClass} resize-none`}
                      required
                      aria-required="true"
                    />
                  </div>

                  {error && (
                    <p
                      className="text-red-400 text-sm flex items-center gap-2"
                      role="alert"
                      aria-live="assertive"
                    >
                      <span aria-hidden="true">⚠</span> {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full flex items-center justify-center gap-2.5 py-3.5 bg-green-500 hover:bg-green-400 disabled:bg-green-600/50 text-slate-900 font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                    aria-label={sending ? t('form_sending') : t('form_send')}
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {t('form_sending')}
                      </>
                    ) : (
                      <>
                        {t('form_send')}
                        <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
