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
        @click="decrease"
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

  <div class="mt-7 p-4 shadow shadow-gray-500">
    <div class="flex gap-2 mb-3">
      <p>What is your favorite food?</p>
      <input type="text" v-model="food" @input="setToLocal('food', food)" />
    </div>
    <div class="flex gap-2">
      <p>What is your age?</p>
      <input type="number" v-model="age" @input="setToLocal('age', age)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const msg = ref("");
const inputMsg = ref("");

const increase = () => {
  counter.value++;
};
const decrease = () => {
  if (counter.value > 0) counter.value--;
};

//localstorage
const food = ref(localStorage.getItem("food"));
const age = ref(localStorage.getItem("age"));

const setToLocal = (key, value) => {
  localStorage.setItem(key, value);
};
</script>

<style></style>
