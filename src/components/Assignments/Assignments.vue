<template>
  <section class="space-y-6">
    <Assignment :assignment="tasksInProgress" title="In Progress" />
    <Assignment :assignment="completed" title="Completed" />
    <Assignment />
  </section>
</template>

<script setup>
import Assignment from "./Assignment.vue";
defineProps({
  assignments: Array,
});

const completed = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const tasksInProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});
</script>

<style></style>
