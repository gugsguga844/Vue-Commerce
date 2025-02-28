<script setup>
import TriviaHeader from './components/TriviaHeader.vue'
import QuestionsComponent from './components/QuestionsComponent.vue'
</script>

<template>
  <header>
    <TriviaHeader />
  </header>

  <main>
    <QuestionsComponent />
  </main>

  <RouterView />
</template>

<style>
header {
  padding: 20px 0px;
  border-bottom: 2px solid;
}

main {
  margin-top: 50px;
  text-align: center;
}
</style>
