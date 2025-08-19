import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../components/Index.vue";
import CardData from "../components/CardData.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/card_data",
    name: "CardData",
    component: CardData,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
