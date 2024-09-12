<script setup>
import { ref, watch, watchEffect, reactive, computed } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const sum = computed(() => Number(counter?.value) + Number(multiple?.value))
const counter = ref(0)
const multiple = ref(0)
const validations = reactive({
  isPrime: false
})

const route = useRouter()
const toast = useToast()

function isPrimeNumber(num) {
  if (num <= 1) return false
  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }

  return true
}

const show = (counter, multiple) => {
  toast.add({
    severity: 'success',
    summary: 'Multiplo encontrado',
    detail: `${counter} é multiplo de ${multiple}`,
    life: 3000
  })
}

function showMultiple() {
  if (counter.value > 0 && counter.value % multiple.value === 0) {
    show(counter.value, multiple.value)
  }
}

watch(counter, () => {
  validations.isPrime = isPrimeNumber(counter.value)
})

watchEffect(showMultiple)
</script>

<template>
  <div class="flex gap-10 p-20">
    <TheButton label="Voltar" :onclick="() => route.back()" />
    <div class="flex flex-col items-center">
      <div class="flex">
        <TheButton label="-" :onclick="() => counter--" />
        <RouterLink
          :to="{
            //GAME CHANGER
            name: 'music.details',
            params: { id: '123321123' }
          }"
        >
          <h1 class="mb-4 text-4xl font-extrabold w-60 flex justify-center">
            Contador: {{ counter }}
          </h1>
        </RouterLink>
        <TheButton label="+" :onclick="() => counter++" />
      </div>

      <h2>Número primo: {{ !!validations.isPrime ? 'Sim' : 'Não' }}</h2>
    </div>

    <FloatLabel>
      <InputText if="Multiplo" v-model="multiple" />
      <label for="Multiplo">Multiplo</label>
    </FloatLabel>

    <h1 class="text-2xl font-extrabold w-60 flex justify-center !w-[390px]">
      A soma dos valores é de:
      <span class="flex !ml-4">{{ sum }}</span>
    </h1>
  </div>
  <TheToast />
</template>

<style scoped></style>
