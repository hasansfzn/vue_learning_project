<script setup></script>

<template>
  <div
    class="shadow shadow-blue-500/40 rounded-lg p-4 m-1 w-96 border border-gray-600 bg-gray-700"
  >
    <h2 v-if="$slots.title" class="mb-3 text-xl font-semibold text-green-300">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
    <footer v-if="$slots.footer">
      <h3 class="text-sm absolute bottom-0 mb-4 text-center border-top">
        <slot name="footer"></slot>
      </h3>
    </footer>
  </div>
</template>

<style scoped></style>
