<script setup>
  import TeamMember from "./TeamMember.vue";
  defineProps({
    team: Object,
  });
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">Status</th>
    </thead>
    <tbody>
      <!-- <h2>{{ team.members.length }}</h2> -->
      <TeamMember
        v-for="member in team.members"
        :key="member.id"
        :member="member"
      />
    </tbody>
  </table>
</template>

<style></style>
