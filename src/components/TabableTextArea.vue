<script setup>
  import { onMounted, ref } from "vue";

  // const textarea = ref(null);

  defineProps({
    modelValue: String,
  });

  let emit = defineEmits(["update:modelValue"]);

  const onTabPressed = (e) => {
    let textArea = e.target;

    //get caret position/selection
    let val = textArea.value,
      start = textArea.selectionStart,
      end = textArea.selectionEnd;

    //set textarea value tp : text before caret + tab + text after caret
    textArea.value = val.substring(0, start) + "\t" + val.substring(end);

    //put caret at the right position again
    textArea.selectionStart = textArea.selectionEnd = start + 1;
  };

  const update = (e) => {
    //emit the updated value to the top
    emit("update:modelValue", e.target.value);
  };
</script>

<template>
  <div class="">
    <textarea
      class="w-96 h-60 p-2"
      @keydown.tab.prevent="onTabPressed"
      @keyup="(e) => emit('update:modelValue', e.target.value)"
      v-text="modelValue"
    />
  </div>
</template>

<style></style>
