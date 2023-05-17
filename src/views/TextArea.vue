<script setup>
  import { ref } from "vue";
  import TabableTextArea from "../components/TabableTextArea.vue";

  let comment = ref("Test Value");

  //   setTimeout(() => {
  //     comment.value = "Changed value of text area!!";
  //   }, 3000);
</script>

<template>
  <form class="m-3 p-2 shadow shadow-gray-300">
    <h2 class="my-2 py-3 text-xl font-semibold">
      The Textarea has an extra functionality where you can add tab inside the
      text.
    </h2>
    <TabableTextArea v-model="comment" />
  </form>
</template>

<style></style>
