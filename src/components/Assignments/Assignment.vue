<template>
  <li>
    <label>
      {{ assignment?.name }}
      <input type="checkbox" v-model="assignment.completed" />
    </label>
  </li>
</template>

<script setup>
defineProps({
  assignment: Object,
});
</script>

<style></style>
