<script setup>
import { computed, defineEmits, vModelCheckbox } from "vue";
const props = defineProps({
  initialTags: Array,
  modelValue: String,

  //   as we used v-vModelCheckbox, seletedTag is replaced by modelValue
});
const emit = defineEmits(["update:modelValue"]);

const tags = computed(() => {
  return ["All", ...new Set(props.initialTags)];
});
</script>

<template>
  <button
    :class="[
      { 'px-2 py-1 my-2': true },
      { 'border border-blue-400': modelValue === tag },
    ]"
    v-for="tag in tags"
    :key="tag"
    @click="emit('update:modelValue', tag)"
  >
    {{ tag }}
  </button>
</template>

<style></style>
