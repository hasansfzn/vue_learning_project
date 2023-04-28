<script setup>
import { ref, computed } from "vue";
const assignments = ref([
  { name: "Fininsh Project", completed: false },
  { name: "Read DOcs", completed: false },
  { name: "Turn In Project", completed: false },
]);

const completedAssignments = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const tasksInProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});
</script>

<template>
  <section>
    <h2 class="text-3xl py-3 font-bold">Assignment</h2>
    <ul>
      <li v-for="assignment in tasksInProgress" :key="assignment.name">
        <label>
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.completed" />
        </label>
      </li>
    </ul>
    <h3 class="mt-4 text-gray font-bold text-2xl">Completed Assignments</h3>
    <p v-if="completedAssignments.length === 0">
      No Assignments are completed.
    </p>
    <ul>
      <li v-for="asg in completedAssignments" :key="asg.name">
        {{ asg.name }}
      </li>
    </ul>
  </section>
</template>

<style></style>
