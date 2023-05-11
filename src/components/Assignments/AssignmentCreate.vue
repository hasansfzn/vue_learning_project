<script setup>
import { ref, defineEmits, defineProps, computed, watchEffect } from "vue";

const props = defineProps({
  tags: Array,
});

const emit = defineEmits(["add"]);

const newItem = ref("");

const allTags = computed(() => {
  return [...new Set(props.tags)];
});
const tagSelected = ref(allTags.value[0]);

const addAnAssignment = () => {
  emit("add", newItem.value, tagSelected.value);
  newItem.value = "";
};
</script>

<template>
  <form @submit.prevent="addAnAssignment">
    <label>Add an Assignment: </label>
    <div class="flex items-center">
      <input
        type="text"
        class="text-white p-2"
        placeholder="add an assignment"
        v-model="newItem"
      />
      <label for="selectTag" class="ms-2"> Tag: </label>
      <select id="selectTag" v-model="tagSelected" class="p-2 me-2">
        <option v-for="tag in allTags" :value="tag" :key="tag">
          {{ tag }}
        </option>
      </select>
      <button
        type="submit "
        class="p-2 ml-2 bg-white text-gray-500"
        :disabled="!newItem.length"
      >
        Add
      </button>
    </div>
  </form>
</template>

<style></style>
