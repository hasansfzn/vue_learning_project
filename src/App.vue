<script setup>
import { ref } from "vue";
import ButtonBind from "./components/ButtonBind.vue";
import AssignmentList from "./components/AssignmentList.vue";
import SubmitButton from "./components/SubmitButton.vue";

let type_button = ref("primary");
let process = ref(false);

const do_process = () => {
  process.value = true;
};
</script>

<template>
  <ButtonBind />
  <AssignmentList />
  <div class="grid place-items-cetner my-5">
    <label>
      Select the Button Class:
      <select v-model="type_button">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="muted">Muted</option>
      </select>
    </label>

    <div class="processing_div">
      <button class="btn btn-primary-400" @click="do_process">Process</button>
    </div>
  </div>
  <SubmitButton :processing="process" :type_button="type_button" />
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
