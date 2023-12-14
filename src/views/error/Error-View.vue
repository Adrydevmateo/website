<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import type { TLanguages } from '@/Types'
import ButtonComp from '@/components/button/Button-Comp.vue'

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
      en: `Sorry but the page { ${reactiveValue} } doesn't exist.`,
      es: `Lo siento pero la página { ${reactiveValue} } no existe.`
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
  <h1 class="home-title heading heading-1">
    {{ errorTranslations.title[mainStore.CurrentLanguage] }}:
    <span style="font-size: 2em">404</span>
  </h1>
  <p
    class="base-font-size-text text-line-height"
    v-html="errorTranslations.description(currentRoutePath)[mainStore.CurrentLanguage]"
  ></p>

  <ButtonComp animation-type="basic" class="error-page-navigation-btn" @click="GoHome">
    <template #default>
      <span>{{ errorTranslations.goHome[mainStore.CurrentLanguage] }}</span>
      <!-- <img
            :src="headerTranslations.languageSwitcher[mainStore.CurrentLanguage].icon"
            :alt="`Flag icon for ${
              headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name
            }`"
          /> -->
    </template>
  </ButtonComp>

  <ButtonComp animation-type="basic" class="error-page-navigation-btn" @click="GoToProjects">
    <template #default>
      <span>{{ errorTranslations.goToProject[mainStore.CurrentLanguage] }}</span>
      <!-- <img
            :src="headerTranslations.languageSwitcher[mainStore.CurrentLanguage].icon"
            :alt="`Flag icon for ${
              headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name
            }`"
          /> -->
    </template>
  </ButtonComp>

  <ButtonComp animation-type="basic" class="error-page-navigation-btn" @click="GoBack">
    <template #default>
      <span>{{ errorTranslations.goBack[mainStore.CurrentLanguage] }}</span>
      <!-- <img
            :src="headerTranslations.languageSwitcher[mainStore.CurrentLanguage].icon"
            :alt="`Flag icon for ${
              headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name
            }`"
          /> -->
    </template>
  </ButtonComp>
</template>

<style scoped>
.error-page-navigation-btn {
  margin: 0.4em;
  min-width: 6em;
  color: var(--color-heading);
  border: 0.2em solid var(--color-heading);
  background-color: transparent;
  border-radius: 1em;
  text-align: center;
  padding: 0.4em;
}

.error-page-navigation-btn:hover {
  color: var(--background-color);
  background-color: var(--color-heading);
}
</style>
