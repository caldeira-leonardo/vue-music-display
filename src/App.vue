<script setup>
import { RouterView, useRoute } from 'vue-router'
const router = useRoute()
</script>

<template>
  <TheToast />
  <RouterView :key="router.path" />
</template>

<style scoped></style>
