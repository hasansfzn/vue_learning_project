import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CounterView from "@/views/CounterView.vue";
import InputToLocal from "@/views/InputToLocal.vue";
import TextArea from "@/views/TextArea.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView,
    },
    {
      path: "/inputToLocalStorage",
      name: "inputToLocalStorage",
      component: InputToLocal,
    },
    {
      path: "/textArea",
      name: "textArea",
      component: TextArea,
    },
  ],
});

export default router;
