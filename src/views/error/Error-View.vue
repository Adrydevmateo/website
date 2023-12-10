<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import type { TLanguages } from '@/Types'

const router = useRouter()
const mainStore = useMainStore()

type TErrorTranslations = {
  title: TLanguages
  description: (reactiveValue: string) => TLanguages
  goBack: TLanguages
  goHome: TLanguages
  goToProject: TLanguages
}

const errorTranslations: TErrorTranslations = {
  title: {
    en: 'Error Page',
    es: 'Página de Error'
  },
  description(reactiveValue: string) {
    return {
      en: `Sorry but the page { ${reactiveValue} } doesn't exist`,
      es: `Lo siento pero la página { ${reactiveValue} } no existe`
    }
  },
  goHome: {
    en: 'Go Home',
    es: 'Página de Inicio'
  },
  goToProject: {
    en: 'Go To Projects',
    es: 'Ver Proyectos'
  },
  goBack: {
    en: 'Go Back',
    es: 'Regresar'
  }
}

const currentRoutePath = router.currentRoute.value.path

const GoHome = () => router.push('/')
const GoToProjects = () => router.push('/projects')
const GoBack = () => router.go(-1)

useHead({
  title: () => errorTranslations.title[mainStore.CurrentLanguage],
  meta: [
    {
      name: 'description',
      content: errorTranslations.description(currentRoutePath)[mainStore.CurrentLanguage]
    }
  ]
})
</script>

<template>
  <h1>{{ errorTranslations.title[mainStore.CurrentLanguage] }}</h1>
  <p>{{ errorTranslations.description(currentRoutePath)[mainStore.CurrentLanguage] }}</p>
  <button @click="GoHome">{{ errorTranslations.goHome[mainStore.CurrentLanguage] }}</button>
  <button @click="GoToProjects">
    {{ errorTranslations.goToProject[mainStore.CurrentLanguage] }}
  </button>
  <button @click="GoBack">{{ errorTranslations.goBack[mainStore.CurrentLanguage] }}</button>
</template>

<style scoped></style>
