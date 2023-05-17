<script setup>
import { onMounted, ref } from "vue";

const textarea = ref(null);
onMounted(() => {
  textarea.value.addEventListener("keydown", (e) => {
    let t = textarea.value;

    //when tab pressed
    if (e.keyCode === 9) {
      //get caret position/selection
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

      //set textarea value to: text before caret + tab + text after caret
      t.value = val.substring(0, start) + "\t" + val.substring(end);

      //put caret at the right position again
      t.selectionStart = t.selectionEnd = start + 1;

      e.preventDefault();
    }
  });
});
</script>

<template>
  <div class="m-3 p-2 shadow shadow-gray-300">
    <textarea ref="textarea" class="w-96 h-60">Hi THere</textarea>
  </div>
</template>

<style></style>
