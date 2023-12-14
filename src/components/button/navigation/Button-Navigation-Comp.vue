<script setup lang="ts">
import type { TAnimation } from '@/Types'
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
  animationType?: TAnimation
}>()
</script>

<template>
  <RouterLink :to="to">
    <button
      class="button-navigation"
      :class="{
        'button-navigation-active': $route.name === to,
        'animate-basic': animationType == 'basic'
      }"
    >
      <slot name="default"></slot>
    </button>
  </RouterLink>
</template>

<style scoped>
.button-navigation {
  cursor: pointer;
  border: none;
  margin: 0 0.2em;
  border-radius: 0.2em;
  font-weight: 600;
  background-color: transparent;
  color: var(--color-btn-inactive);
}

.button-navigation-active {
  color: var(--color-btn-active);
  padding-bottom: 0.2rem;
  border-bottom: 0.2em solid var(--color-heading);
}
</style>
