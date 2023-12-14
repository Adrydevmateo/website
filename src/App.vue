<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/header/Header-Comp.vue'
import { useMainStore } from '@/stores/main.store'

const mainStore = useMainStore()
</script>

<template>
  <div class="main-wrapper" :class="mainStore.CurrentColorTheme">
    <HeaderComp />
    <br />
    <div class="views-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  color: var(--color-text);
  background: var(--background-color);
  width: 100%;
  width: inherit;
  width: 100%;
  min-height: 200vh;
}

.views-wrapper {
  margin: 0rem 1rem;
}

@media (min-width: 1000px) {
  .views-wrapper {
    display: flex;
    max-width: 60vw;
    margin: auto;
  }
}
</style>
