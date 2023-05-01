<template>
  <section class="space-y-6">
    <Assignment :assignment="tasksInProgress" title="In Progress" />
    <Assignment :assignment="completed" title="Completed" />
    <Assignment />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import Assignment from "./Assignment.vue";

const assignments = ref([
  { name: "Fininsh Project", completed: false },
  { name: "Read DOcs", completed: false },
  { name: "Turn In Project", completed: false },
]);

const completed = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const tasksInProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});
</script>

<style></style>
