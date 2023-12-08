<script setup lang="ts">
import { useMainStore } from "@/stores/main.store"
import { useHead } from "@unhead/vue"
import homeTranslations from "./Home.translations"

const mainStore = useMainStore()

useHead({
  title: () => homeTranslations.title[mainStore.CurrentLanguage]
})
</script>

<template>
  <main>
    <h1 data-theme="dark">Home Page in: {{ mainStore.CurrentLanguage }}</h1>
    <button @click="mainStore.ChangeLanguage('en')">English</button>
    <button @click="mainStore.ChangeLanguage('es')">Spanish</button>
  </main>
</template>

<style scoped></style>
