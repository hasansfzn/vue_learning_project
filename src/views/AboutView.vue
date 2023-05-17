<script setup>
  import { useFlash } from "@/composables/useFlash";
  import Quiz from "@/components/Quiz/Quiz.vue";
  import { ref } from "vue";
  import { counter } from "@/stores/counter";

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
    <h3 class="text-md text-green-400 p-2">
      This count is from Counter Page --> {{ counter.count }}
    </h3>

    <Quiz class="py-4" />
  </div>
</template>

<style scoped></style>
