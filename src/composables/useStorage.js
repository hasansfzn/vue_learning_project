import { ref, watch } from "vue";

export function useStorage(key, storedVal) {
  const storedItem = read();

  if (storedItem) {
    storedVal = ref(storedItem);
  } else {
    storedVal = ref(storedVal);
    write();
  }

  watch(storedVal, write);

  function read() {
    localStorage.getItem(key);
  }

  function remove() {
    localStorage.removeItem(key);
  }

  function write() {
    localStorage.setItem(key, storedVal.value);
    if (storedVal.value === "" || null) {
      remove();
    }
  }

  return storedVal;
}
