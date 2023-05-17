<script setup>
  //   import { inject } from "vue";

  import { state } from "@/stores/quizStore";

  //   let { quizMessage, changeValue } = inject("quizMessage");

  //   let quiz = inject("quiz");
</script>
<template class="m-2">
  <span>This is where the props will show: </span>
  <button
    class="text-red text-sm ms-4"
    @click="state.name = 'Changed QUIZ'"
  >
    Change State Value
  </button>
  <h3 class="m-2 text-md text-rose-300">{{ state.name }}</h3>
</template>
