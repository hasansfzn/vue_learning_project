import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCounterStore = defineStore("counterPinia", {
  // other options...
  state() {
    return {
      count: 5,
    };
  },

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },

  getters: {
    remaining() {
      return 15 - this.count;
    },
  },
});
