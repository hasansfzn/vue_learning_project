<script setup>
  import { ref } from "vue";
  import Modal from "./Modal.vue";
  import { useTeamStore } from "@/stores/teamStore";

  let team = useTeamStore();

  let showModal = ref(false);
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.remainingSpots"
    @click="showModal = true"
  >
    Add Member ( {{ team.remainingSpots }} Spots Left)
  </button>
  <Teleport to="body">
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
  </Teleport>
</template>

<style scoped></style>
