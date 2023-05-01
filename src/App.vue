<script setup>
import ButtonBind from "./components/ButtonBind.vue";
import AssignmentList from "./components/AssignmentList.vue";
import SubmitButton from "./components/SubmitButton.vue";
</script>

<template>
  <ButtonBind />
  <AssignmentList />
  <SubmitButton :processing="true" type="secondary" />
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
