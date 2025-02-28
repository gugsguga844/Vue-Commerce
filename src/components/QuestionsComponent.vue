<script setup>
import { getQuestions } from '@/services/HttpService'
import { onMounted, ref } from 'vue'

const questoes = ref([])

async function getQuestoes() {
  const resultado = await getQuestions()
  questoes.value = resultado.data.results
}

onMounted(() => {
  getQuestoes()
})
</script>

<template>
  <div v-for="questao in questoes" :key="questao.type">
    <h1>{{ questao.question }}</h1>
  </div>

  <div class="optionsDiv">
    <div class="options">
      <input type="radio" id="optionOne" name="question" />
      <label for="optionOne">Opção 1</label>
    </div>

    <div class="options">
      <input type="radio" id="optionTwo" name="question" /><label for="optionOne">Mahomes</label>
    </div>
  </div>
</template>

<style>
h1 {
  font-size: 3rem;
}

.optionsDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
}

input {
  margin: 32px 5px;
}

label {
  font-size: 2rem;
}
</style>
