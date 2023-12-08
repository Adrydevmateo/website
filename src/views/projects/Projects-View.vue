<script setup lang="ts"></script>

<template>
  <h1>Projects</h1>
  <RouterLink :to="{ name: 'single-project', params: { project: 'TO-DO-APP' } }">Single</RouterLink>
  <hr />

  <RouterView />
</template>

<style scoped></style>
