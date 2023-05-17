import { reactive } from "vue";

export let counter = reactive({
  // state
  count: 0,
  disabled: false,
  //action
  increment() {
    this.count++;
    if (this.count > 0) {
      this.disabled = false;
    }
  },
  decrement() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.disabled = true;
    }
  },
});
