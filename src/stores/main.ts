import { ref, computed, type Ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const lang: Ref<string> = ref('en')

  const ChangeLanguage = (newLang: string): string => lang.value = newLang

  const CurrentLanguage: ComputedRef<string> = computed(() => lang.value)

  return { lang, ChangeLanguage, CurrentLanguage }
})
