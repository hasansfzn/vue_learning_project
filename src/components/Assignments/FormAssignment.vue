<template>
  <form @submit.prevent="addAnAssignment">
    <label>Add an Assignment: </label>
    <div class="block">
      <input
        type="text"
        class="text-white p-2"
        placeholder="add an assignment"
        v-model="newItem"
      />
      <button
        type="submit "
        class="p-2 ml-2 bg-white text-gray-500"
        :disabled="!newItem.length"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newItem = ref("");

const emit = defineEmits(["add"]);

const addAnAssignment = () => {
  emit("add", newItem.value);
  newItem.value = "";
};
</script>

<style></style>
