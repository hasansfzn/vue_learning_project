<template>
  <section class="bg-gray-200 rounded">
    <Assignments :assignments="assignments" />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Assignments from "./Assignments.vue";

const assignments = ref([
  { name: "Fininsh Project", completed: false },
  { name: "Read DOcs", completed: false },
  { name: "Turn In Project", completed: false },
]);
</script>

<style></style>
