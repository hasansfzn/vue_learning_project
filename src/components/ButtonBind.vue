<script setup>
const buttonClasses = "text-green";
</script>

<template>
  <div class="button_container">
    <button :class="buttonClasses">Click Me</button>
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
