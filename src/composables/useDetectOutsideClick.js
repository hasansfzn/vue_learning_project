import { onBeforeUnmount, onUnmounted } from "vue";

export default function useDetectOutsideClick(component, callback) {
  //   console.log(component);
  if (!component) return;
  const listener = (event) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value)
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onUnmounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}
