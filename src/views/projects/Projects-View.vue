<script setup lang="ts">
import CardProjectComp from '@/components/cards/card-project/Card-Project-Comp.vue'
import { useMainStore } from '@/stores/main.store'
import { useHead } from '@unhead/vue'
import { projectTranslations } from './Projects.translations'
import { useProjectsStore } from '@/stores/projects/projects.store'

const mainStore = useMainStore()
const projectsStore = useProjectsStore()

useHead({
  title: () => projectTranslations.pageTitle[mainStore.CurrentLanguage]
})
</script>

<template>
  <div id="projects-view">
    <h1 class="home-title heading heading-1">
      {{ projectTranslations.pageTitle[mainStore.CurrentLanguage] }}
    </h1>
    <ul class="list-of-projects list-style-none">
      <li v-for="project in projectsStore.projects" :key="project.id">
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
