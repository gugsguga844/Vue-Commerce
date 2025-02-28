<script setup>
import { getQuestions } from '@/services/HttpService'
import { onMounted, ref } from 'vue'

const questionList = ref([])
const correctAnswers = ref([])
const incorrectAnswers = ref([])

async function getQuestoes() {
  const resultado = await getQuestions()
  questionList.value = resultado.data.results.map((newArray) => newArray.question)
  correctAnswers.value = resultado.data.results.map((newArray) => newArray.correct_answer)
  incorrectAnswers.value = resultado.data.results.map((newArray) => newArray.incorrect_answers)
  console.log(questionList, correctAnswers, incorrectAnswers)
}

onMounted(() => {
  getQuestoes()
})
</script>

<template>
  <div v-for="questao in questionList" :key="questao.type">
    <h1>{{ questao }}</h1>
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
