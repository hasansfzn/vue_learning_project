<script setup>
import { useFlash } from "@/composables/useFlash";

const { flashMessage } = useFlash();
</script>

<template>
  <div
    class="shadow shadow-blue-500/40 rounded-lg p-4 m-1 w-96 border border-gray-600 bg-gray-700"
  >
    <h2 v-if="$slots.title" class="mb-3 text-xl font-semibold text-green-300">
      <slot name="title"></slot>
    </h2>
    <slot></slot>

    <div class="flex items-center justify-center" v-if="$slots.buttonFlash">
      <button
        class="btn shadow shadow-gray-200 p-2 mt-4"
        @click="flashMessage('This from MAIN porps')"
      >
        <slot name="buttonFlash"></slot>
      </button>
    </div>

    <footer v-if="$slots.footer">
      <h3 class="text-sm absolute bottom-0 mb-4 text-center border-top">
        <slot name="footer"></slot>
      </h3>
    </footer>
  </div>
</template>

<style scoped></style>
