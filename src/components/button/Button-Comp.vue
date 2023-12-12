<script setup lang="ts"></script>

<template>
  <button class="button">
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
