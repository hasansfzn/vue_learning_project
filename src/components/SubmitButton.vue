<template>
  <div>
    <button
      class="relative"
      :class="{
        'bg-gray-400 hover:bg-gray-700': type_button === 'primary',
        'bg-blue-400 hover:bg-blue-700': type_button === 'secondary',
        'bg-gray-700 hover:bg-black-600  cursor-not-allowed':
          type_button === 'muted',
        'bg-gray-700 hover:bg-black-600  spinner': processing,
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
  processing: {
    type: Boolean,
  },
});
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  color: transparent;
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}
</style>
