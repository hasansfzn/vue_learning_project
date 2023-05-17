<template>
  <div class="m-2">
    <h2 class="p-2 text-green-300 shadow-md font-semibold text-xl m-2">
      Counter is : {{ counter }}
    </h2>
    <div class="flex items-center justify-between gap-4">
      <button
        id="increment"
        class="p-2 btn rounded-2 border shadow shadow-gray-200"
        @click="increase"
      >
        Increment
      </button>
      <button
        id="decrement"
        class="p-2 btn rounded-2 border shadow shadow-gray-200"
        :class="{ 'cursor-not-allowed': disabledButton }"
        @click="decrease"
        :disabled="disabledButton"
      >
        Decrement
      </button>
    </div>
  </div>
  <div class="mt-5 pt-3">
    <h2 class="mt-4 font-bold" id="message">{{ msg }}</h2>
    <div class="flex">
      <input
        type="text"
        v-model="inputMsg"
        class="mt-2"
        placeholder="Enter a Message"
      />
      <button
        id="inputMessage"
        @click="msg = inputMsg"
        class="btn shadow shadow-gray-200 ms-2"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const disabledButton = ref(false);

const msg = ref("");
const inputMsg = ref("");

const increase = () => {
  counter.value++;
  if (disabledButton.value) disabledButton.value = false;
};
const decrease = () => {
  if (counter.value > 0) counter.value--;
  else disabledButton.value = true;
};
</script>

<style></style>
