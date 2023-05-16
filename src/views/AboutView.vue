<script setup>
import { useFlash } from "@/composables/useFlash";

const { flashMessage } = useFlash();
</script>

<template>
  <div class="text-justify text-center">
    <h2>About Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis
      provident quidem ut, aperiam et autem asperiores molestiae dolore, eos
      dolor consectetur? Ipsa quae praesentium similique nam nesciunt minus
      beatae.
    </p>

    <div>
      <button
        class="btn rounded shadow shadow-gray-200"
        @click="flashMessage('About Page is UpToDate')"
      >
        See About
      </button>
    </div>
  </div>
</template>

<style scoped></style>
