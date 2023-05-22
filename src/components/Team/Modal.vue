<script setup>
  import useDetectOutsideClick from "@/composables/useDetectOutsideClick";
  import { ref } from "vue";

  const props = defineProps({
    show: Boolean,
  });

  const emit = defineEmits(["close"]);

  const modalRef = ref(null);
  const exampleComposableText = ref("hello");

  useDetectOutsideClick(modalRef, () => {
    //detection should be happen but don't work
  });
</script>

/** ** The below code is for Transition element, to apply animation on the modal
component
<!-- 
enter-from-class="opacity-0 scale-125"
enter-to-class="opacity-100 scale-100"
leave-from-class="opacity-100 scale-100"
leave-to-class="opacity-0 scale-125"
enter-active-class="transition duration-300"
leave-active-class="transition duration-400" 
-->

*/

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-400"
  >
    <div
      v-if="props.show"
      class="modal-mask"
    >
      <div
        class="modal-container"
        ref="modalRef"
      >
        <header class="modal-header">
          <slot name="header">
            <h2 class="text-start font-semibold">Want to add a new member?</h2>
          </slot>
        </header>

        <!-- default slot  -->
        <slot>
          <div>Modal BOdy Defaulr</div>
        </slot>

        <footer class="modal-footer">
          <slot name="footer">
            <button
              @click="$emit('close')"
              class="btn border-2 rounded-md py-1 px-2 bg-gray-100 hover:bg-gray-200"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
  .modal-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
  }
  .modal-container {
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    background-color: white;
    border-radius: 7px;
  }

  .modal-header {
    border-bottom: 1px solid #c9c9c9;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  .modal-footer {
    border-top: 1px solid #c9c9c9;
    font-size: 0.8rem;
    margin-top: 1rem;
    padding-top: 1rem;
  }

  /* these css are for naming transition modal  */

  /* .modal-enter-from {
    opacity: 0;
  }
  .modal-enter-to {
    opacity: 100;
  }
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-leave-from {
    opacity: 100;
  }
  .modal-leave-to {
    opacity: 0;
  } */
</style>
