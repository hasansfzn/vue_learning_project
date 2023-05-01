<script setup>
import AssignmentListCmp from "./AssignmentListCmp.vue";
import AssignmentForm from "./AssignmentForm.vue";
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

const newItem = ref("");

const addAnAssignment = () => {
  assignments.value.push({
    name: newItem.value,
    completed: false,
  });
  newItem.value = "";
};
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-3xl py-3 font-bold">Assignments to Do</h2>
    <AssignmentListCmp
      :assignments="inProgress"
      title="In Progress Assignments"
    />

    <AssignmentListCmp :assignments="completed" title="Completed Assignments" />

    <!-- <AssignmentForm :assignments="assignments" v-model="assignments" />  -->
    <form @submit.prevent="addAnAssignment">
      <label class="mb-2 pb-3">Add an Assignment: </label>
      <div class="block">
        <input type="text" class="p-2" v-model="newItem" />
        <button
          class="btn bg-blue-600 ml-2"
          type="submit"
          :disabled="newItem.length === 0"
        >
          Add Assigment
        </button>
      </div>
    </form>
  </section>
</template>

<style></style>
