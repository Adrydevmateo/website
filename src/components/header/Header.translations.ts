import type { THeaderTranslations } from './Header.types'
import FlagEn from '@/assets/icons/flags/FlagUs4x3.svg'
import FlagEs from '@/assets/icons/flags/FlagEs4x3.svg'

const headerTranslations: THeaderTranslations = {
  // navigation
  navigation: {
    home: {
      to: 'home',
      name: {
        en: 'Home',
        es: 'Inicio'
      }
    },
    projects: {
      to: 'projects',
      name: {
        en: 'Projects',
        es: 'Proyectos'
      }
    }
  },
  // language switcher
  languageSwitcher: {
    en: {
      icon: FlagEn,
      name: 'English'
    },
    es: {
      icon: FlagEs,
      name: 'Español'
    }
  }
}

export default headerTranslations
