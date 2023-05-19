<script setup>
  import { useTeamStore } from "@/stores/teamStore";
  let team = useTeamStore();

  console.log(team.remainingSpots);
</script>

<template>
  <header class="flex justify-between mt-8 pt-3">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.remainingSpots"
        @click="$emit('add')"
      >
        Add Member ( {{ team.remainingSpots }} Spots Left)
      </button>
    </div>
    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <img
          src="../../assets/smiley.png"
          alt="Smiley"
          class="mr-2 w-10 h-10"
        />
        Smiley Team
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </h3>
    </div>
  </header>
</template>

<style></style>
