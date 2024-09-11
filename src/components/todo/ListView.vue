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
    <div v-if="!showTodoList.value">
      <TheButton label="Todo's" :onclick="(showTodoList = true)" />
    </div>
    <ThePanel v-else header="Tarefas">
      <div class="flex flex-col gap-4">
        <div v-for="task in tasks" :key="task.id" class="flex items-center">
          <TheCheckbox
            v-model="selectedValues"
            :value="task.id"
            @click="() => handleComplete(task.id)"
          />
          <h1 :class="task.isCompleted ? 'line-through' : ''" class="!mx-2">
            {{ task.message }}
          </h1>
          <i
            class="pi pi-trash text-red-600 cursor-pointer"
            :onclick="() => handleDelete(task.id)"
          />
        </div>
      </div>
    </ThePanel>
  </div>
</template>

<style scoped lang="scss"></style>
