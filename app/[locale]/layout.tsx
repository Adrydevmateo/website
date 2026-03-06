import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Grotesk, Noto_Sans_JP } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import '../globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const notoSansJP = Noto_Sans_JP({
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '900'],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Adry Mateo Ramon',
      'Full Stack Engineer',
      'Frontend Team Lead',
      'React',
      'Next.js',
      'FastAPI',
      'Node.js',
      'AI-assisted development',
      'Dominican Republic',
      'Remote Developer',
    ],
    authors: [{ name: 'Adry Mateo Ramon', url: 'https://www.linkedin.com/in/adrydev/' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  const fontClasses = `${archivo.variable} ${spaceGrotesk.variable} ${notoSansJP.variable}`
  const bodyFontStyle = locale === 'ja'
    ? { fontFamily: `var(--font-noto-sans-jp), 'Hiragino Sans', 'Yu Gothic UI', Meiryo, sans-serif` }
    : undefined

  return (
    <html lang={locale} className={fontClasses}>
      <body className={`bg-[#0F172A] text-slate-50 font-body antialiased`} style={bodyFontStyle}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
