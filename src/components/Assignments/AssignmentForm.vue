<template>
  <form @submit.prevent="addAnAssignment">
    <label class="mb-2 pb-3">Add an Assignment: </label>
    <div class="block">
      <input type="text" class="p-2" v-model="newItem" />
      <button class="btn bg-blue-600 ml-2" type="submit">Add Assigment</button>
    </div>
  </form>
</template>

<script setup>
import Assignments from "./Assignments.vue";
import { ref } from "vue";
defineProps({
  assignments: Array,
});

let newItem = ref("");

//console.log(assignments.value);

const addAnAssignment = () => {
  assignments.value.push({
    name: newItem.value,
    completed: false,
  });
};
</script>

<style></style>
