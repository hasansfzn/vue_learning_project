<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ButtonBind from "@/components/ButtonBind.vue";

import SubmitButton from "./components/SubmitButton.vue";

let type_button = ref("primary");
let process = ref(false);

const do_process = () => {
  process.value = true;
};
</script>

<template>
  <header>
    <nav class="text-decoration-none text-gray-500 flex gap-2 justify-center">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/counter">Counter</RouterLink>
    </nav>
  </header>
  <!-- <ButtonBind /> -->
  <div class="drop-shadow-lg border-slate-200 rounded">
    <!-- <HomeView /> -->
    <RouterView />
  </div>

  <!-- <AssignmentList /> -->
  <!--

  <div class="grid place-items-cetner my-5">
    <label>
      Select the Button Class:
      <select v-model="type_button">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="muted">Muted</option>
      </select>
    </label>

    <div class="processing_div mt-2">
      <button class="btn btn-primary-400" @click="do_process">Process</button>
    </div>
  </div>
  <SubmitButton :processing="process" :type_button="type_button" />

  -->
</template>

<style scoped>
.active {
  font-weight: 500;
  color: tomato;
}
</style>
