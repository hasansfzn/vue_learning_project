import { defineStore } from "pinia";

export let useCounterStore = defineStorage("counter", {
  state() {
    return {
      count: 0,
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
      return 10 - this.count;
    },
  },
});
