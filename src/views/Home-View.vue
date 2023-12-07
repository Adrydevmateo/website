<script setup lang="ts">
import { useMainStore } from "@/stores/main"
import { useHead } from "@unhead/vue"

const mainStore = useMainStore()

const title: { [key: string]: string } = {
  en: "Home Page",
  es: "Pagina de Inicio"
}

useHead({
  title: () => title[mainStore.CurrentLanguage]
})
</script>

<template>
  <main>
    <h1>Home Page in: {{ mainStore.CurrentLanguage }}</h1>
    <button @click="mainStore.ChangeLanguage('en')">English</button>
    <button @click="mainStore.ChangeLanguage('es')">Spanish</button>
  </main>
</template>
