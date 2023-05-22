<template>
  <Modal
    :show="showModal"
    @close="showModal = false"
  >
    <!-- <template #header>
      <h2>Overwritten header of the modal</h2>
    </template> -->
    <template #default>
      <form>
        <div class="flex gap-2">
          <input
            type="email"
            class="flex-1 p-2"
            placeholder="Enter Email..."
          />
          <button>Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script setup>
  import Modal from "./Modal.vue";
</script>

<style scoped></style>
