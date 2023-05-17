import { ref, watch } from "vue";

export function useStorage(key, storedVal) {
  const storedItem = read();

  if (storedItem) {
    storedVal = ref(storedItem);
  } else {
    storedVal = ref(storedVal);
    write();
  }

  watch(storedVal, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function remove() {
    localStorage.removeItem(key);
  }

  function write() {
    if (storedVal.value === "" || null) {
      remove();
    } else localStorage.setItem(key, JSON.stringify(storedVal.value));
  }

  return storedVal;
}
