<template>
  <li class="">
    <label class="flex justify-between align-center">
      {{ assignment?.name }}
      <input type="checkbox" v-model="assignment.completed" class="ml-3" />
    </label>
  </li>
</template>

<script setup>
defineProps({
  assignment: Object,
});
</script>

<style></style>
