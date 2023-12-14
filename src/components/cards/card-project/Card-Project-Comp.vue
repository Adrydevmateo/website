<script setup lang="ts">
import type { TProject } from '@/views/projects/Projects.types'
import CardComp from '../Card-Comp.vue'
import { CardProjectTranslation } from './Card-Project.translations'
import { useMainStore } from '@/stores/main.store'

defineProps<{
  project: TProject
  maxWidth?: string
  width?: string
  minWidth?: string
}>()

const mainStore = useMainStore()
</script>

<template>
  <CardComp
    class="project animate-basic"
    :style="{ maxWidth: maxWidth, width: width, minWidth: minWidth }"
  >
    <template #body>
      <img
        class="project-image"
        :src="project.image"
        :alt="`Icon of the project: ${project.name[mainStore.CurrentLanguage]}`"
      />
    </template>
    <template #footer>
      <div class="project-footer">
        <h3 class="project-name bold">{{ project.name[mainStore.CurrentLanguage] }}</h3>
        <div class="project-footer--links">
          <a class="link no-decoration animate-basic" :href="project.repository_link">{{
            CardProjectTranslation.links.code[mainStore.CurrentLanguage]
          }}</a>
          <a class="link no-decoration animate-basic" :href="project.site_link">{{
            CardProjectTranslation.links.site[mainStore.CurrentLanguage]
          }}</a>
        </div>
        <ol class="list-of-technologies list-style-none">
          <li v-for="(technology, index) in project.main_technologies" :key="index">
            <a class="technology animate-basic no-decoration uppercase" href="#">{{
              technology
            }}</a>
          </li>
        </ol>
      </div>
    </template>
  </CardComp>
</template>

<style scoped>
.project {
  border-bottom: 0.2em solid var(--color-heading);
  border-top: 0.2em solid var(--color-heading);
  border-radius: 1em;
  padding: 0.2em 0;
}

.project-image {
  width: 100%;
  height: 100%;
  border-radius: 1em;
}

.project-footer {
  margin-top: 0.6em;
}

.project-footer .project-name {
  padding-left: 1em;
  text-transform: capitalize;
  color: var(--color-heading);
}

.project-footer--links {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.project-footer--links .link {
  min-width: 6em;
  color: var(--color-heading);
  border: 0.2em solid var(--color-heading);
  border-radius: 1em;
  text-align: center;
  padding: 0.2em;
}

.project-footer--links .link:hover {
  color: var(--background-color);
  background-color: var(--color-heading);
}

.list-of-technologies {
  display: flex;
  justify-content: end;
  gap: 1em;
  right: 0;
  padding: 0.6em 1em 0.8em;
}

.list-of-technologies .technology {
  color: var(--color-heading);
  border-bottom: 0.2em solid var(--color-heading);
  text-align: center;
  padding: 0.2em;
  display: inline-block;
}
</style>
