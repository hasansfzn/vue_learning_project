<script setup>
import utils from "../utils";
import AssignmentCreate from "../components/Assignments/AssignmentCreate.vue";
import AssignmentListCmp from "../components/Assignments/AssignmentListCmp.vue";
import AssignmentCard from "../components/Assignments/AssignmentCard.vue";

import { ref, computed, onMounted, watch } from "vue";

const assignments = ref([]);
const showCompleted = ref(true);
const { saveDataToLocal, getDataFromLocal } = utils;

async function fetchAssignments() {
  if (getDataFromLocal().length) {
    assignments.value = [...getDataFromLocal()];
  } else {
    try {
      const response = await fetch("http://localhost:3002/assignments");
      if (!response.ok) {
        throw new Error("Failed to fetch assignments");
      }
      const assignmentData = await response.json();
      assignments.value = assignmentData;
      saveDataToLocal(assignments.value);
    } catch (error) {
      console.error(error);
    }
  }
}

onMounted(fetchAssignments);

const completed = computed(() => {
  return assignments.value.filter((asg) => asg.completed === true);
});

const inProgress = computed(() => {
  return assignments.value.filter((asg) => !asg.completed);
});

const addAnAssignment = (name, tag) => {
  assignments.value.push({
    name: name,
    completed: false,
    tag: tag,
  });
  saveDataToLocal(assignments.value);
};

// watch(assignments, () => {
//   console.log(assignments.value);
// });
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-3xl py-3 font-bold">Assignments to Do</h2>
    <div class="flex justify-center gap-4">
      <AssignmentListCmp
        :assignments="inProgress"
        title="In Progress Assignments"
      >
        <AssignmentCreate
          @add="addAnAssignment"
          :tags="assignments.map((asg) => asg.tag)"
        />
      </AssignmentListCmp>
      <transition name="fade">
        <AssignmentListCmp
          v-if="showCompleted"
          :assignments="completed"
          title="Completed Assignments"
          hidable
          @hideAssignment="showCompleted = !showCompleted"
        />
      </transition>
      <AssignmentCard>
        <template v-slot:title>Named Slot for Title</template>
        <div class="flex items-center flex-col">
          <h2 class="text-xl font-semibold text-white mb-2">
            This is the Default
          </h2>
          <p class="text-white text-justify">
            Default Paragraph which will appear in the default slot, this slot
            for the div which we are passing from parent, without any template
          </p>
        </div>
        <template v-slot:footer>Footer Added On the Bottom.</template>
      </AssignmentCard>

      <!-- <AssignmentForm @add="addAnAssignment" /> -->
    </div>

    <!-- <form @submit.prevent="addAnAssignment">
      <label class="mb-2 pb-3">Add an Assignment: </label>
      <div class="block">
        <input type="text" class="p-2 bg-white" v-model="newItem" />
        <button
          class="bg-white p-2 ml-2 text-black rounded-none"
          type="submit"
          :disabled="newItem.length === 0"
        >
          Add Assigment
        </button>
      </div>
    </form> -->
  </section>
</template>

<style>
.fade-leave-active {
  transition: opacity 2s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
