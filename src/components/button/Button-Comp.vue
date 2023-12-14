<script setup lang="ts">
import type { TAnimation } from '@/Types'

defineProps<{
  animationType?: TAnimation
}>()
</script>

<template>
  <button class="button" :class="{ 'animate-basic': animationType == 'basic' }">
    <slot name="default"></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  margin: 0 0.2em;
  border-radius: 0.2em;
  font-weight: 600;
}
</style>
