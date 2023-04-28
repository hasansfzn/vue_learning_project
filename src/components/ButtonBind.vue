<script setup>
const buttonClasses = "text-green";

const toggle = () => {
  alert("Toggle");
};
</script>

<template>
  <div class="button_container">
    <button :class="buttonClasses" @click="toggle">Click Me</button>
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
