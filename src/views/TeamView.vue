<script setup>
  // import TeamMember from "../components/Team/TeamMember.vue";
  import TeamHeader from "../components/Team/TeamHeader.vue";
  import TeamMembersTable from "../components/Team/TeamMembersTable.vue";
  import TeamFooter from "../components/Team/TeamFooter.vue";
  import Modal from "../components/Team/Modal.vue";

  // import team from "../teamMembers.json";

  import { useTeamStore } from "../stores/teamStore.js";
  import { ref, watch } from "vue";
  let team = useTeamStore();

  team.fill();

  setTimeout(() => {
    team.grow(25);
  }, 3000);
</script>

<template>
  <TeamHeader />

  <div
    class="place-self-center flex flex-col gap-y-3"
    style="width: 725px"
  >
    <TeamMembersTable />
  </div>

  <TeamFooter />
</template>

<style></style>
