<script setup lang="ts">
import { ref } from 'vue'
import type { TProject } from './Projects.types'
import CardProjectComp from '@/components/cards/card-project/Card-Project-Comp.vue'
import { useMainStore } from '@/stores/main.store'
import homeTranslations from '../home/Home.translations'

const mainStore = useMainStore()

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
  <div id="projects-view">
    <h1 class="home-title heading heading-1">
      {{ homeTranslations.projects.title[mainStore.CurrentLanguage] }}
    </h1>
    <ul class="list-of-projects list-style-none">
      <li v-for="project in listOfProjects" :key="project.id">
        <CardProjectComp :project="project" max-width="22em" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* LIST OF PROJECTS */
.list-of-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4em;
}
</style>
