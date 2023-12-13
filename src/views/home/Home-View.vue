<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useHead } from '@unhead/vue'
import homeTranslations from './Home.translations'
import IconVue from '../../assets/icons/technologies/LogosVue.svg'
import IconTypeScript from '../../assets/icons/technologies/LogosTypescriptIcon.svg'
import IconNodejs from '../../assets/icons/technologies/LogosNodejs.svg'
import IconDocker from '../../assets/icons/technologies/LogosDockerIcon.svg'
import { ref } from 'vue'
import type { TProject } from '../projects/Projects.types'
import CardProjectComp from '@/components/cards/card-project/Card-Project-Comp.vue'

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

const listOfProjects = ref<Array<TProject>>([
  {
    id: crypto.randomUUID(),
    name: {
      en: 'to-do app',
      es: 'tareas'
    },
    description: {
      en: 'Crafted with HTML, CSS, and JS for a seamless user experience. Easily manage tasks, and enjoy responsive design for on-the-go productivity. Streamlined and intuitive, this app keeps you organized effortlessly.',
      es: 'Diseñado con HTML, CSS y JS para una experiencia de usuario perfecta. Administre tareas fácilmente y disfrute de un diseño responsivo para una productividad en movimiento. Optimizada e intuitiva, esta aplicación te mantiene organizado sin esfuerzo.'
    },
    image:
      'https://raw.githubusercontent.com/Adrydevmateo/todo-prototype/main/public/en-preview.png',
    documentation_link: '',
    repository_link: 'https://github.com/Adrydevmateo/todo-prototype/tree/main',
    site_link: 'https://adrydev-todoprototype.netlify.app/',
    tags: ['web-development', 'html', 'css', 'js'],
    main_technologies: ['html', 'css', 'js']
  },
  {
    id: crypto.randomUUID(),
    name: {
      en: 'to-do app',
      es: 'tareas'
    },
    description: {
      en: 'Crafted with HTML, CSS, and JS for a seamless user experience. Easily manage tasks, and enjoy responsive design for on-the-go productivity. Streamlined and intuitive, this app keeps you organized effortlessly.',
      es: 'Diseñado con HTML, CSS y JS para una experiencia de usuario perfecta. Administre tareas fácilmente y disfrute de un diseño responsivo para una productividad en movimiento. Optimizada e intuitiva, esta aplicación te mantiene organizado sin esfuerzo.'
    },
    image:
      'https://raw.githubusercontent.com/Adrydevmateo/todo-prototype/main/public/en-preview.png',
    documentation_link: '',
    repository_link: 'https://github.com/Adrydevmateo/todo-prototype/tree/main',
    site_link: 'https://adrydev-todoprototype.netlify.app/',
    tags: ['web-development', 'html', 'css', 'js'],
    main_technologies: ['html', 'css', 'js']
  },
  {
    id: crypto.randomUUID(),
    name: {
      en: 'to-do app',
      es: 'tareas'
    },
    description: {
      en: 'Crafted with HTML, CSS, and JS for a seamless user experience. Easily manage tasks, and enjoy responsive design for on-the-go productivity. Streamlined and intuitive, this app keeps you organized effortlessly.',
      es: 'Diseñado con HTML, CSS y JS para una experiencia de usuario perfecta. Administre tareas fácilmente y disfrute de un diseño responsivo para una productividad en movimiento. Optimizada e intuitiva, esta aplicación te mantiene organizado sin esfuerzo.'
    },
    image:
      'https://raw.githubusercontent.com/Adrydevmateo/todo-prototype/main/public/en-preview.png',
    documentation_link: '',
    repository_link: 'https://github.com/Adrydevmateo/todo-prototype/tree/main',
    site_link: 'https://adrydev-todoprototype.netlify.app/',
    tags: ['web-development', 'html', 'css', 'js'],
    main_technologies: ['html', 'css', 'js']
  }
])
</script>

<template>
  <main id="home-view">
    <!-- PRESENTATION -->
    <section id="home-presentation" class="home-container">
      <div>
        <h1
          class="home-title heading heading-1"
          v-html="homeTranslations.presentation.title[mainStore.CurrentLanguage]"
        ></h1>
        <p
          class="base-font-size-text text-line-height"
          v-html="homeTranslations.presentation.presentationText[mainStore.CurrentLanguage]"
        ></p>
      </div>

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

    <!-- ABOUT -->
    <section id="home-about" class="home-container">
      <h2 class="heading heading-2">
        {{ homeTranslations.about.title[mainStore.CurrentLanguage] }}
      </h2>
      <p
        class="base-font-size-text text-line-height"
        v-html="homeTranslations.about.aboutContentText[mainStore.CurrentLanguage]"
      ></p>
    </section>

    <!-- PROJECTS -->
    <section id="home-projects" class="home-container">
      <h2 class="heading heading-2">
        {{ homeTranslations.projects.title[mainStore.CurrentLanguage] }}
      </h2>
      <ul class="list-of-projects list-style-none">
        <li v-for="project in listOfProjects" :key="project.id">
          <CardProjectComp :project="project" max-width="22em" />
        </li>
      </ul>
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
#home-projects .list-of-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4em;
  margin-top: 2.6em;
}

.home-title {
  font-size: 4em;
}

.home-container {
  min-height: 92vh;
}
</style>
