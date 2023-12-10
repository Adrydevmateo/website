<script setup lang="ts">
defineProps<{
  headerWidth?: string
  headerHeight?: string
  bodyWidth?: string
  bodyHeight?: string
  footerWidth?: string
  footerHeight?: string
}>()
</script>

<template>
  <aside>
    <!-- header -->
    <header :style="{ width: headerWidth, height: headerHeight }">
      <slot name="header"></slot>
    </header>

    <!-- body -->
    <div :style="{ width: bodyWidth, height: bodyHeight }">
      <slot name="boy"></slot>
    </div>

    <!-- footer -->
    <footer :style="{ width: footerWidth, height: footerHeight }">
      <slot name="footer"></slot>
    </footer>
  </aside>
</template>

<style scoped></style>
