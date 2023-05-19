<script setup>
  import TeamMember from "../components/Team/TeamMember.vue";
  import TeamHeader from "../components/Team/TeamHeader.vue";
  import TeamMembersTable from "../components/Team/TeamMembersTable.vue";
  import TeamFooter from "../components/Team/TeamFooter.vue";
  import TeamAddingModal from "../components/Team/TeamAddingModal.vue";
  // import team from "../teamMembers.json";

  import { useTeamStore } from "../stores/teamStore.js";
  import { ref, watch } from "vue";
  let team = useTeamStore();

  team.fill();

  setTimeout(() => {
    team.grow(25);
  }, 3000);

  let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div
    class="place-self-center flex flex-col gap-y-3"
    style="width: 725px"
  >
    <TeamMembersTable />
  </div>

  <TeamFooter />

  <TeamAddingModal
    :show="showModal"
    @close="showModal = false"
  >
    <template #header>
      <h2>Overwritten header of the modal</h2>
    </template>
    <template #default>
      <h3>Hello Modal</h3>
      <p class="mb-5">
        Overwritten Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam, fugit.
      </p>
    </template>
  </TeamAddingModal>
</template>

<style></style>
