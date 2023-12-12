import type { TLang } from '@/Types'

export type THeaderTranslations = {
  navigation: {
    home: {
      to: string
      name: {
        [key in TLang]: string
      }
    }
    projects: {
      to: string
      name: {
        [key in TLang]: string
      }
    }
  }
  languageSwitcher: {
    [key in TLang]: {
      icon: string
      name: string
    }
  }
}
