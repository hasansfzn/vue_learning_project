<script setup>
import { computed, ref } from "vue";
import Assignment from "./Assignment.vue";
const props = defineProps({
  assignments: Array,
  title: String,
});

const tags = computed(() => {
  return ["All", ...new Set(props.assignments.map((asg) => asg.tag))];
});

const selectedTag = ref("All");

// console.log(props.assignments);

const selectedAssignments = computed(() => {
  if (selectedTag.value == "All") {
    return props.assignments;
  }
  return props.assignments.filter((asg) => asg.tag === selectedTag.value);
});

console.log("selected Assignments: ", selectedAssignments.value);
</script>

<template>
  <section>
    <h3 class="text-green-400">{{ title }}</h3>
    <div class="my-2">
      <p v-if="!assignments.length">No Assignments Here</p>
      <div
        class="flex gap-2 items-center justify-center"
        v-if="assignments.length"
      >
        <button
          :class="[
            { 'px-2 py-1 my-2': true },
            { 'border border-blue-400': selectedTag === tag },
          ]"
          v-for="tag in tags"
          :key="tag"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <ul
      :class="{
        'border border-gray-600 p-4 divide-y divide-gray-600':
          assignments.length,
      }"
    >
      <Assignment
        :assignment="assignment"
        v-for="assignment in selectedAssignments"
        :key="assignment.name"
      />
    </ul>
  </section>
</template>

<style></style>
