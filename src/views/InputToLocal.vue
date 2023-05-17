<template>
  <div class="m-2 shadow shadow-gray-200 p-3">
    <div class="flex gap-2 justify-center items-center">
      <p>What is your favorite food?</p>
      <input
        type="text"
        v-model="food"
        class="p-2"
        placeholder="Enter your fab food"
      />
    </div>
    <div class="flex gap-2 justify-center items-center mt-3">
      <p>What is your age?</p>
      <input
        type="text"
        v-model="age"
        class="p-2"
        placeholder="Enter your age"
      />
    </div>
    <div class="mt-2">
      <h2 class="p-2 text-green-300">Your Favorite Food is : {{ food }}.</h2>
      <h2 class="p-2 text-green-300">Your Age is : {{ age }} years old.</h2>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from "../composables/useStorage";

import { ref, watch } from "vue";
const food = useStorage("food", "Apple");
const age = useStorage("age", 20);

// const write = (key, value) => {
//   localStorage.setItem(key, value);
// };

// watch(food, (val) => {
//   localStorage.setItem("food", val);
// });

// setTimeout(() => {
//   food.value = "changed Food";
// }, 3000);
</script>

<style></style>
