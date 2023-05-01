<template>
  <div>
    <button
      :class="{
        'bg-gray-400 hover:bg-gray-700': type_button === 'primary',
        'bg-blue-400 hover:bg-blue-700': type_button === 'secondary',
        'bg-gray-700 hover:bg-black-600  cursor-not-allowed':
          type_button === 'muted',
      }"
    >
      Submit Props
    </button>
  </div>
</template>

<script setup>
defineProps({
  type_button: {
    type: String,
    default: "primary",
  },
});
</script>

<style></style>
