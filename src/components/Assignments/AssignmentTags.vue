<script setup>
import { computed, defineEmits } from "vue";
const props = defineProps({
  initialTags: Array,
  selectedTag: String,

  //   as we used v-vModelCheckbox, seletedTag is replaced by modelValue
});
const emit = defineEmits(["update:selectedTag"]);

const tags = computed(() => {
  return ["All", ...new Set(props.initialTags)];
});
</script>

<template>
  <div class="flex items-center justify-start gap-2 flex-wrap my-2">
    <button
      :class="[
        { 'px-2 py-1 ': true },
        { 'border border-blue-400': selectedTag === tag },
      ]"
      v-for="tag in tags"
      :key="tag"
      @click="emit('update:selectedTag', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style></style>
