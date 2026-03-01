import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../views/card.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
