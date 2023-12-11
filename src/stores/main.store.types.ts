import type { TLang } from '@/Types'

export type TColorTheme = 'dark-theme' | 'white-theme'

export type TMainStoreState = {
  lang: TLang
  colorTheme: TColorTheme
}
