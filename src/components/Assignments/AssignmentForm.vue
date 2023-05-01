<script setup>
import Assignments from "./Assignments.vue";
import { ref, defineEmits } from "vue";
//import { defineEmits, emit } from "@vue/runtime-core";

const emit = defineEmits(["add"]);

const props = defineProps({
  assignments: Array,
});

let newItem = ref("");

const addAnAssignment = () => {
  emit("add", newItem.value);
  newItem.value = "";
};
</script>

<template>
  <form @submit.prevent="addAnAssignment">
    <label class="mb-2 pb-3">Add an Assignment: </label>
    <div class="block">
      <input type="text" class="p-2" v-model="newItem" />
      <button class="btn bg-blue-600 ml-2" type="submit">Add Assigment</button>
    </div>
  </form>
</template>

<style></style>
