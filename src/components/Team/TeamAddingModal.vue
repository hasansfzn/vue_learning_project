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
      <header>
        <slot name="header">
          <h2>Default Modal Title</h2>
        </slot>
      </header>

      <slot>
        <div>Modal BOdy Defaulr</div>
      </slot>

      <footer>
        <slot name="footer">
          <small class="me-2">Default Modal Footer</small>
          <button
            @click="$emit('close')"
            class="btn border-2 rounded-md p-2"
          >
            Close
          </button>
        </slot>
      </footer>
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
