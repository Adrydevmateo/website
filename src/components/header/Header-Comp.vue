<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { RouterLink } from 'vue-router'

const mainStore = useMainStore()

const HandleChangeColorTheme = (): string =>
  mainStore.ChangeColorTheme(mainStore.IsCurrentColorThemeBlack ? 'white-theme' : 'dark-theme')
</script>

<template>
  <header>
    <nav>
      <RouterLink to="home">Home</RouterLink>
      <RouterLink to="projects">Projects</RouterLink>
    </nav>
    <div>
      <button @click="HandleChangeColorTheme">
        {{ mainStore.CurrentColorTheme }}
      </button>
    </div>
    <div>
      <button @click="mainStore.ChangeLanguage('en')">English</button>
      <button @click="mainStore.ChangeLanguage('es')">Spanish</button>
    </div>
  </header>
</template>

<style scoped></style>
