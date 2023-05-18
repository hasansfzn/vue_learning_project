<script setup>
  import TeamMember from "../components/Team/TeamMember.vue";
  import TeamHeader from "../components/Team/TeamHeader.vue";
  import TeamMembersTable from "../components/Team/TeamMembersTable.vue";
  import team from "../teamMembers.json";
</script>

<template>
  <TeamHeader :team="team" />

  <div
    class="place-self-center flex flex-col gap-y-3"
    style="width: 725px"
  >
    <TeamMembersTable :team="team" />
    <p
      v-if="team.spot === team.members.length"
      class="text-right text-gray-600 italic"
    >
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>

  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font=semibold text-lg">Smiley - 5 Member Team</h5>
  </footer>
</template>

<style></style>
