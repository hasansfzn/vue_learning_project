<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
const props = defineProps({
  assignments: Array,
  title: String,
  hidable: {
    type: Boolean,
    default: false,
  },
});

const selectedTag = ref("All");

const selectedAssignments = computed(() => {
  if (selectedTag.value == "All") {
    return props.assignments;
  }
  const selectedAsgs = props.assignments.filter(
    (asg) => asg.tag === selectedTag.value
  );
  if (!selectedAsgs.length) {
    selectedTag.value = "All";
    return props.assignments;
  }
  return selectedAsgs;
});

const emit = defineEmits(["hideAssignment"]);
//console.log("selected Assignments: ", selectedAssignments.value);
</script>

<template>
  <section
    :class="{
      'shadow shadow-blue-500/40 rounded-lg  p-4 m-1 w-96 border border-gray-600 bg-gray-700': true,
    }"
  >
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-green-400 font-semibold text-lg">
        {{ title }} ({{ assignments.length }})
      </h3>
      <button
        v-if="hidable"
        @click="emit('hideAssignment')"
        class="text-white hover:text-red-700 focus:outline-none hover:border-none border-none outline-none bg-transparent text-xl"
      >
        &times;
      </button>
    </div>

    <div class="my-2">
      <p v-if="!assignments.length">No Assignments Here</p>
      <div
        class="flex gap-2 items-center justify-start"
        v-if="assignments.length"
      >
        <!-- 
        on the below custom tag, AssignmentTags,  we replace these two lines 
           :selectedTag="selectedTag"
           @selectTag="selectedTag = $event"   
          
        by adding v-model, (v-model is used in custom component) 
           v-model="seletedTag"
      -->

        <AssignmentTags
          :initialTags="assignments.map((asg) => asg.tag)"
          v-model:selectedTag="selectedTag"
        />
      </div>
    </div>

    <ul
      class="mb-3 mt-2"
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
    <slot></slot>
  </section>
</template>

<style scoped></style>
