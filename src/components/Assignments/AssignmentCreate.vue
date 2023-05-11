<script setup>
import { ref, defineEmits, defineProps, computed, watchEffect } from "vue";

const props = defineProps({
  tags: Array,
});

const emit = defineEmits(["add"]);

const newItem = ref("");
const tagSelected = ref("");

const allTags = computed(() => {
  return [...new Set(props.tags)];
});

const addAnAssignment = () => {
  emit("add", newItem.value, tagSelected.value);
  newItem.value = "";
  tagSelected.value = "";
};
</script>

<template>
  <form @submit.prevent="addAnAssignment">
    <label class="">Add an Assignment: </label>
    <div class="flex items-center mt-2">
      <input
        type="text"
        class="text-gray-800 bg-white p-2"
        placeholder="Enter an assignment"
        v-model="newItem"
      />
      <input
        type="text"
        class="text-gray-800 bg-white p-2 w-1/3 border-l-4 border-gray-800"
        placeholder="Tag?"
        :list="allTags"
        v-model="tagSelected"
      />
      <datalist :id="allTags">
        <option v-for="tag in allTags" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </datalist>
      <!-- <label for="selectTag" class="ms-2"> Tag: </label>
      <select id="selectTag" v-model="tagSelected" class="p-2 me-2">
        <option v-for="tag in allTags" :value="tag" :key="tag">
          {{ tag }}
        </option>
      </select> -->
      <button
        type="submit "
        class="p-2 ml-2 border-none bg-white text-gray-500 rounded-none"
        :disabled="!newItem.length"
      >
        Add
      </button>
    </div>
  </form>
</template>

<style></style>
