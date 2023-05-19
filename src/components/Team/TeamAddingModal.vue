<script setup>
  defineProps({
    show: Boolean,
  });
</script>

<template>
  <div
    v-if="show"
    class="modal-mask"
  >
    <div class="modal-container">
      <h2>Modal Title</h2>
      <div>Modal BOdy</div>
      <footer>Modal Footer</footer>
    </div>
  </div>
</template>

<style>
  .modal-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
  }
  .modal-container {
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    background-color: white;
  }
</style>
