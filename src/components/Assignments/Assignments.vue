<script setup>
import AssignmentListCmp from "./AssignmentListCmp.vue";
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

console.log(inProgress.value.length);
console.log(completed.value.length);
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-3xl py-3 font-bold">Assignments to Do</h2>
    <AssignmentListCmp
      :assignments="inProgress"
      title="In Progress Assignments"
    />

    <AssignmentListCmp :assignments="completed" title="Completed Assignments" />
  </section>
</template>

<style></style>
