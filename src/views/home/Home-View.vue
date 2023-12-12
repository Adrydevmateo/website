<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useHead } from '@unhead/vue'
import homeTranslations from './Home.translations'
import IconVue from '../../assets/icons/technologies/LogosVue.svg'
import IconTypeScript from '../../assets/icons/technologies/LogosTypescriptIcon.svg'
import IconNodejs from '../../assets/icons/technologies/LogosNodejs.svg'
import IconDocker from '../../assets/icons/technologies/LogosDockerIcon.svg'

const mainStore = useMainStore()

useHead({
  title: () => homeTranslations.pageTitle[mainStore.CurrentLanguage]
})

const collectionOfTechnologies = [
  {
    name: 'ts',
    icon: IconTypeScript
  },
  {
    name: 'vue',
    icon: IconVue
  },
  {
    name: 'nodejs',
    icon: IconNodejs
  },
  {
    name: 'docker',
    icon: IconDocker
  }
]
</script>

<template>
  <main id="home-view">
    <section id="home-presentation" class="home-container">
      <div>
        <h1
          class="home-title heading heading-1"
          v-html="homeTranslations.title[mainStore.CurrentLanguage]"
        ></h1>
        <p
          class="base-font-size-text text-line-height"
          v-html="homeTranslations.presentationText[mainStore.CurrentLanguage]"
        ></p>
      </div>

      <!-- TODO: LIST OF TECHNOLOGIES -->
      <ul class="home-presentation--list-of-technologies">
        <li
          class="home-presentation--list-of-technologies--technology"
          v-for="technology in collectionOfTechnologies"
          :key="technology.name"
        >
          <img :src="technology.icon" :alt="`Icon of technology: ${technology.name}`" />
        </li>
      </ul>
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
#home-view {
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin-top: 6em;
}

/* PRESENTATION */
#home-presentation {
  display: flex;
  flex-direction: column;
  gap: 4em;
}

.home-presentation--list-of-technologies {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
}

.home-presentation--list-of-technologies--technology > img {
  width: 100%;
  height: 6em;
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
  min-height: 92vh;
}
</style>
