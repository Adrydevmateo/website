<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <h1>Error Page</h1>
  <p>{{ router }}</p>
</template>

<style scoped></style>
