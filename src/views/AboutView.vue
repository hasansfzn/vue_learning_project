<script setup>
  import { useFlash } from "@/composables/useFlash";
  import Quiz from "@/components/Quiz/Quiz.vue";
  import { ref } from "vue";

  const { flashMessage } = useFlash();

  // let quiz = {
  //   name: "Quiz of Softzino",
  //   questions: [],
  // };
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

    <Quiz class="py-4" />
  </div>
</template>

<style scoped></style>
