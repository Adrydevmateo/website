<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/header/Header-Comp.vue'
import { useMainStore } from '@/stores/main.store'

const mainStore = useMainStore()
</script>

<template>
  <div class="main-wrapper" :class="mainStore.CurrentColorTheme">
    <HeaderComp />
    <RouterView />
  </div>
</template>

<style scoped></style>
