<script setup>
  import QuizHeader from "./QuizHeader.vue";
  import QuizBody from "./QuizBody.vue";
  import QuizFooter from "./QuizFooter.vue";
  import { provide } from "vue";
  import { ref } from "vue";

  //   const props = defineProps({
  //     quizProp: String,
  //     quiz: Object,
  //   });

  //   const quizMessage = ref("QUIZ MESSAGE");

  //   provide("quizMessage", {
  //     quizMessage,
  //     changeValue: () => {
  //       quizMessage.value = "Changed Message";
  //     },
  //   });

  //   provide("quiz", props.quiz);

  import { state } from "@/stores/quizStore";

  console.log(state);
</script>

<template>
  <!-- below section is for practicing provide and inject dependencies  -->
  <div class="mt-3 p-2 shadow shadow-gray-200">
    <h2>
      Here is the Quiz Component where Provide and Inject dependencies are
      applied
    </h2>
    <h3 class="text-green-200 p-2">{{ state.name }}</h3>
    <QuizHeader />
    <QuizBody />
    <QuizFooter />
  </div>
</template>

<style></style>
