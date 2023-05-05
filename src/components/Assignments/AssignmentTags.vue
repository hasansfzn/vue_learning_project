<script setup>
import { computed } from "vue";
const props = defineProps({
  initialTags: Array,
});
console.log(props.initialTags, "initalTag");
const tags = computed(() => {
  return ["All", ...new Set(props.initialTags)];
});
</script>

<template>
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
</template>

<style></style>
