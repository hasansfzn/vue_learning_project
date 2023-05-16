import { ref, watch } from "vue";
export function useLocalStorage(key, stored_item) {
  let storedValue = localStorage.getItem(key);

  if (storedValue) {
    stored_item = ref(storedValue);
  } else {
    stored_item = ref(stored_item);
    saveToLocal();
  }

  watch(stored_item, () => {
    saveToLocal();
  });

  function saveToLocal() {
    localStorage.setItem(key, stored_item.value);
    if (stored_item.value === "" || null) {
      localStorage.removeItem(key);
    }
  }

  return stored_item;
}
