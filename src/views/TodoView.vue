<script setup>
import { ref, provide, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import ListView from '@/components/todo/ListView.vue'

const newTaskValue = ref('')
const tasks = ref([])
provide('tasks', tasks)
const taskCount = computed(() => tasks.value.filter((task) => !task.isCompleted).length) ?? 0

function handleComplete(taskId) {
  const taskIndex = tasks.value.findIndex((task) => task.id === taskId)

  tasks.value[taskIndex] = {
    ...tasks.value[taskIndex],
    isCompleted: !tasks.value[taskIndex].isCompleted
  }
}
provide('handleComplete', handleComplete)

function handleDelete(taskId) {
  console.log('delete....', taskId) // remove logs
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}
provide('handleDelete', handleDelete)

function addTask() {
  tasks.value.push({
    id: uuidv4(),
    message: newTaskValue.value,
    isCompleted: false,
    isDisabled: false
  })
  newTaskValue.value = ''
}
</script>

<template>
  <div class="flex items-center justify-around !h-full flex-col">
    <h1 class="mb-4 text-4xl font-extrabold flex justify-center !mb-20">
      Adicione abaixo as tarefas do dia
    </h1>

    <InputGroup class="flex justify-center">
      <FloatLabel class="!w-1/3">
        <InputText id="todo" class="!w-full" v-model="newTaskValue" />
        <label for="todo">Tarefa a ser adicionada</label>
      </FloatLabel>

      <InputGroupAddon
        v-tooltip.top="{
          value: 'Criar tarefa'
        }"
        class="cursor-pointer"
        :onclick="addTask"
      >
        <i class="pi pi-file-export"></i>
      </InputGroupAddon>
    </InputGroup>

    <h1 v-if="!!taskCount" class="mb-4 text-2xl font-extrabold">
      ainda existem
      <span class="text-4xl !mx-2 font-extrabold">{{ taskCount }}</span> tarefas incompletas
    </h1>

    <h1 v-else>Não existem mais tarefas a serem executadas, parabéns !</h1>

    <ListView class="absolute right-10 bottom-10" />
  </div>
</template>

<style scoped lang="scss"></style>
