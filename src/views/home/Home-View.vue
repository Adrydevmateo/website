<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useHead } from '@unhead/vue'
import homeTranslations from './Home.translations'

const mainStore = useMainStore()

useHead({
  title: () => homeTranslations.pageTitle[mainStore.CurrentLanguage]
})
</script>

<template>
  <main id="home-view">
    <section id="home-presentation" class="home-container">
      <h1
        class="home-title heading heading-1"
        v-html="homeTranslations.title[mainStore.CurrentLanguage]"
      ></h1>
      <p
        class="base-font-size-text text-line-height"
        v-html="homeTranslations.presentationText[mainStore.CurrentLanguage]"
      ></p>

      <!-- TODO: LIST OF TECHNOLOGIES -->
    </section>

    <section id="home-about" class="home-container">
      <h2 class="heading heading-2">About</h2>
      <p
        class="base-font-size-text text-line-height"
        v-html="homeTranslations.aboutContentText[mainStore.CurrentLanguage]"
      ></p>
    </section>

    <section id="home-projects" class="home-container">
      <h2 class="heading heading-2">Projects</h2>
    </section>
  </main>
</template>

<style scoped>
/* PRESENTATION */
#home-view {
  margin: 0rem 1rem;
}

/* ABOUT */
#home-about > ol {
  list-style: none;
  padding: 0;
}

#home-about > ol > li {
  margin: 1em 0em;
}

/* PROJECTS */
.home-title {
  font-size: 4em;
}

.home-container {
  min-height: 100vh;
}
</style>
