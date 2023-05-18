<script setup>
  import TeamMember from "../components/Team/TeamMember.vue";
  import TeamHeader from "../components/Team/TeamHeader.vue";
  import TeamMembersTable from "../components/Team/TeamMembersTable.vue";
  import TeamFooter from "../components/Team/TeamFooter.vue";
  import team from "../teamMembers.json";
</script>

<template>
  <TeamHeader :team="team" />

  <div
    class="place-self-center flex flex-col gap-y-3"
    style="width: 725px"
  >
    <TeamMembersTable :team="team" />
  </div>

  <TeamFooter :team="team" />
</template>

<style></style>
