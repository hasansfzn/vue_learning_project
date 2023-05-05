<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
const props = defineProps({
  assignments: Array,
  title: String,
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

//console.log("selected Assignments: ", selectedAssignments.value);
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
