<template>
  <section>
    <h3 class="mt-4 text-gray font-bold text-2xl">{{ title }}</h3>
    <p v-show="!tasksInProgress.length" class="my-2 text-green-500">
      All Assignments are done for now.
    </p>
    <ul>
      <li v-for="assignment in inProgress" :key="assignment.name">
        <label>
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.completed" />
        </label>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  assignment: Object,
  title: String,
});
</script>

<style></style>
