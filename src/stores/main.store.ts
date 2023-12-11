import { defineStore } from 'pinia'
import type { TColorTheme, TMainStoreState } from './main.store.types'
import type { TLang } from '@/Types'

export const useMainStore = defineStore('main', {
  state: (): TMainStoreState => {
    if (localStorage['main']) return JSON.parse(localStorage['main'])
    return {
      lang: 'en',
      colorTheme: 'dark-theme'
    }
  },
  getters: {
    CurrentLanguage: (state): TLang => state.lang,
    CurrentColorTheme: (state) => state.colorTheme,
    IsCurrentColorThemeBlack: (state) => state.colorTheme == 'dark-theme'
  },
  actions: {
    ChangeLanguage(newLang: TLang): TLang {
      return (this.lang = newLang)
    },
    ChangeColorTheme(newColorTheme: TColorTheme): TColorTheme {
      return (this.colorTheme = newColorTheme)
    }
  }
})
