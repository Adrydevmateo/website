<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="card">
    <header class="card--header">
      <slot name="header"></slot>
    </header>
    <div class="card--body">
      <slot name="body"></slot>
    </div>
    <footer class="card--footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
}
</style>
