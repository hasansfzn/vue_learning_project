<template>
  <div class="grid place-items-center">
    <button>Submit Props</button>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<style></style>
