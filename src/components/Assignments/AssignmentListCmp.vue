<template>
  <Assignment :assignment="inProgress" title="In Progress" />
  <Assignment :assignment="completed" title="Completed" />
</template>

<script setup>
import Assignment from "./Assignment.vue";
import { ref, computed } from "vue";
const assignments = ref([
  { name: "Fininsh Project", completed: false },
  { name: "Read DOcs", completed: false },
  { name: "Turn In Project", completed: false },
]);

const completed = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const inProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});
</script>

<style></style>
