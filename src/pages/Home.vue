<script setup>
import AssignmentCreate from "../components/Assignments/AssignmentCreate.vue";
import AssignmentListCmp from "../components/Assignments/AssignmentListCmp.vue";

import { ref, computed, onMounted } from "vue";

const assignments = ref([]);

async function fetchAssignments() {
  try {
    const response = await fetch("http://localhost:3002/assignments");
    if (!response.ok) {
      throw new Error("Failed to fetch assignments");
    }
    const assignmentData = await response.json();
    assignments.value = assignmentData;
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchAssignments);

const completed = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const inProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});

const addAnAssignment = (name, tag) => {
  assignments.value.push({
    name: name,
    completed: false,
    tag: tag,
  });
};
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-3xl py-3 font-bold">Assignments to Do</h2>
    <div class="flex justify-center gap-4">
      <AssignmentListCmp
        :class="{
          'shadow shadow-blue-500/40 rounded p-4 m-1': true,
        }"
        :assignments="inProgress"
        title="In Progress Assignments"
      >
        <AssignmentCreate
          @add="addAnAssignment"
          :tags="assignments.map((asg) => asg.tag)"
        />
      </AssignmentListCmp>

      <AssignmentListCmp
        :class="{
          'shadow shadow-blue-500/40 rounded p-4 m-1': true,
        }"
        :assignments="completed"
        title="Completed Assignments"
      />

      <!-- <AssignmentForm @add="addAnAssignment" /> -->
    </div>

    <!-- <form @submit.prevent="addAnAssignment">
      <label class="mb-2 pb-3">Add an Assignment: </label>
      <div class="block">
        <input type="text" class="p-2 bg-white" v-model="newItem" />
        <button
          class="bg-white p-2 ml-2 text-black rounded-none"
          type="submit"
          :disabled="newItem.length === 0"
        >
          Add Assigment
        </button>
      </div>
    </form> -->
  </section>
</template>

<style></style>
