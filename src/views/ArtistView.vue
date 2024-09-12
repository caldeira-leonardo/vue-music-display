<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const props = defineProps({ id: { type: Number, required: true } })
const { id } = props

const route = useRoute()
const routeId = computed(() => route.params.id)
</script>

<template>
  <div>Artist routeId{{ routeId }}</div>
  <div>Artist id{{ id }}</div>

  <RouterView />
</template>

<style scoped lang="scss"></style>
