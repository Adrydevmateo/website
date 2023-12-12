<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: String,
    required: true,
    default: 'home'
  }
})
</script>

<template>
  <RouterLink :to="to">
    <button
      class="button-navigation button-navigation-active"
      :class="{ 'button-navigation-inactive': $route.name !== to }"
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
}

.button-navigation-active {
  color: var(--color-btn-active);
}

.button-navigation-inactive {
  color: var(--color-btn-inactive);
}
</style>
