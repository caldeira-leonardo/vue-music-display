<script setup>
import { inject, ref, watch } from 'vue'

const props = defineProps(['class'])

const tasks = inject('tasks')
const handleComplete = inject('handleComplete')
const handleDelete = inject('handleDelete')
const selectedValues = ref([])
const showTodoList = ref(false)

watch(tasks, () => {
  selectedValues.value = tasks.value.filter((task) => {
    return task.isCompleted
  })
})
</script>

<template>
  <div :class="`${props.class}`" class="flex flex-col">
    <div v-if="showTodoList === false">
      <TheButton label="Todo's" :onclick="() => (showTodoList = true)" />
    </div>
    <ThePanel
      v-else
      class="min-w-40 max-w-60 overflow-hidden"
      :pt="{
        content: {
          class: '!p-0 '
        }
      }"
    >
      <template #header>
        <div class="flex justify-between w-full items-center">
          <h1>Tarefas</h1>
          <i
            class="pi pi-times text-red-600 cursor-pointer"
            :onclick="() => (showTodoList = false)"
          />
        </div>
      </template>
      <div class="flex flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-80 py-4 pl-4">
        <div v-for="task in tasks" :key="task.id" class="flex items-center">
          <TheCheckbox
            v-model="selectedValues"
            :value="task.id"
            @click="() => handleComplete(task.id)"
          />
          <h1
            :class="task.isCompleted ? 'line-through' : ''"
            class="!mx-2 truncate"
            v-tooltip.top="{
              value: task.message.length >= 13 ? task.message : ''
            }"
          >
            {{ task.message }}
          </h1>
          <i
            class="pi pi-trash text-red-600 cursor-pointer !mr-2"
            :onclick="() => handleDelete(task.id)"
          />
        </div>
      </div>
    </ThePanel>
  </div>
</template>

<style scoped lang="scss"></style>
