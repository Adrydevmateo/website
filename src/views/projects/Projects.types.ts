import type { TLanguages } from '@/Types'

export type TTechnologyTag =
  | 'js'
  | 'ts'
  | 'html'
  | 'css'
  | 'node'
  | 'vue'
  | 'react'
  | 'deno'
  | 'docker'
  | 'linux'
  | 'sql'
  | 'no-sql'

export type TProjectTag =
  | 'web-development'
  | 'desktop-development'
  | 'mobile-development'
  | 'game-development'

export type TProjectTranslations = {
  pageTitle: TLanguages
  web: TLanguages
  mobile: TLanguages
  desktop: TLanguages
  game: TLanguages
}

export type TProject = {
  id: string
  name: TLanguages
  description: TLanguages
  image: string
  tags: Array<TProjectTag | TTechnologyTag>
  repository_link: string
  site_link: string
  documentation_link: string
  main_technologies: Array<{ name: TTechnologyTag; link: string }>
}
