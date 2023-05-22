<script setup>
  import { ref } from "vue";
  import Modal from "./Modal.vue";
  import { useTeamStore } from "@/stores/teamStore";

  const emit = defineEmits(["addMember"]);

  let team = useTeamStore();

  let showModal = ref(false);

  let nameValue = ref("");
  let emailValue = ref("");

  const addMember = () => {
    if (nameValue.value != "" && emailValue.value != "") {
      emit("addMember", nameValue.value, emailValue.value);
      nameValue.value = "";
      emailValue.value = "";
      showModal.value = false;
    }
  };
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
        <form @submit.prevent="addMember">
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="Enter Name.."
              v-model="nameValue"
              class="p-2"
            />
            <input
              type="email"
              v-model="emailValue"
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
