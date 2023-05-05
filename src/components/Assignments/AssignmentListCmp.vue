<template>
  <section>
    <h3 class="text-green-400">{{ title }}</h3>
    <p v-if="assignments.length === 0">No Assignments Here</p>
    <ul
      :class="{
        'border border-gray-600 p-4 divide-y divide-gray-600':
          assignments.length,
      }"
    >
      <Assignment
        :assignment="assignment"
        v-for="assignment in assignments"
        :key="assignment.name"
      />
    </ul>
  </section>
</template>

<script setup>
import { computed } from "vue";
import Assignment from "./Assignment.vue";
const props = defineProps({
  assignments: Array,
  title: String,
});

const tags = computed(() => {
  return new Set(props.assignments.map((asg) => asg.tag));
});
</script>

<style></style>
