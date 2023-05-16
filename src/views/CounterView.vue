<template>
  <div class="m-2">
    <h2 class="p-2 text-green-300 shadow-md font-semibold text-xl m-2">
      Counter is : {{ counter }}
    </h2>
    <div class="flex items-center justify-between gap-4">
      <button
        class="p-2 btn btn-primary rounded-2 border shadow shadow-gray-200"
        @click="increase"
      >
        Increment
      </button>
      <button
        class="p-2 btn btn-danger rounded-2 border shadow shadow-gray-200"
        @click="decrease"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increase = () => {
  counter.value++;
};
const decrease = () => {
  if (counter.value > 0) counter.value--;
};
</script>

<style></style>
