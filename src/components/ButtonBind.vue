<script setup>
import { ref } from "vue";
const buttonClasses = "text-green";
const active = ref(false);

const toggle = () => {
  active.value = !active.value;
};
</script>

<template>
  <div class="button_container">
    <button :class="[active ? 'text-red' : 'text-green']" @click="toggle">
      Click Me
    </button>
  </div>
</template>

<style>
.text-red {
  color: red;
}
.text-green {
  color: green;
}
</style>
