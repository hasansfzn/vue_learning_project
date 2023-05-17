<script setup>
  import { inject } from "vue";

  let { quizMessage, changeValue } = inject("quizMessage");

  let quiz = inject("quiz");
</script>
<template class="m-2">
  <span>This is where the props will show: </span>
  <button
    class="text-red text-sm ms-4"
    @click="changeValue"
  >
    {{ quizMessage }}
  </button>
  <h3 class="m-2 text-md">{{ quiz.name }}</h3>
</template>
