<script setup>
  import { useFlash } from "@/composables/useFlash";
  import Quiz from "@/components/Quiz/Quiz.vue";
  import { ref } from "vue";
  import { state } from "../stores/quizStore";

  const { flashMessage } = useFlash();

  const quizProp = ref("THis is the Message to Show");

  let quiz = {
    name: "Quiz of Softzino",
    questions: [],
  };
</script>

<template>
  <div class="text-justify text-center">
    <h2>About Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis
      provident quidem ut, aperiam et autem asperiores molestiae dolore, eos
      dolor consectetur? Ipsa quae praesentium similique nam nesciunt minus
      beatae.
    </p>

    <Quiz
      class="py-4"
      :quizProp="quizProp"
      :quiz="quiz"
    />
  </div>
</template>

<style scoped></style>
