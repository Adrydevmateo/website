import type { TLang, TLanguages } from '@/Types'

export type THeaderTranslations = {
  navigation: {
    home: {
      to: string
      name: TLanguages
    }
    projects: {
      to: string
      name: TLanguages
    }
  }
  languageSwitcher: {
    [key in TLang]: {
      icon: string
      name: string
    }
  }
}
