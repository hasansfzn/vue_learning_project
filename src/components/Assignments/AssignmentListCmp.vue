<template>
  <section>
    <h3 class="text-green-400">{{ title }}</h3>
    <p v-if="assignments.length === 0">No Assignments Here</p>
    <ul>
      <Assignment
        :assignment="assignment"
        v-for="assignment in assignments"
        :key="assignment.name"
      />
    </ul>
  </section>
</template>

<script setup>
import Assignment from "./Assignment.vue";
defineProps({
  assignments: Array,
  title: String,
});
</script>

<style></style>
