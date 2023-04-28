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

const anothervar = ref(20);
const refVar = ref(230);

const tasksInProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});
</script>

<template>
  <section>
    <h2 class="text-3xl py-3 font-bold">Assignment</h2>
    <p v-show="!tasksInProgress.length" class="my-2 text-green-500">
      All Assignments are done for now.
    </p>
    <ul>
      <li v-for="assignment in tasksInProgress" :key="assignment.name">
        <label>
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.completed" />
        </label>
      </li>
    </ul>
    <h3 class="mt-4 text-gray font-bold text-2xl">Completed Assignments</h3>
    <p class="my-3" v-if="completedAssignments.length === 0">
      No Assignments are completed yet.
    </p>
    <ul>
      <li v-for="asg in completedAssignments" :key="asg.name">
        <label
          >{{ asg.name }}
          <input type="checkbox" v-model="asg.completed" />
        </label>
      </li>
    </ul>
  </section>
</template>

<style></style>
