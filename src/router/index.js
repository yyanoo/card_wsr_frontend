import { createRouter, createWebHashHistory } from "vue-router";
import CardList from "../components/CardList.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/card_wsr_frontend",
    name: "Home",
    component: Home,
  },
  {
    path: "/card_wsr_frontend/cardlist",
    name: "DefaultHome",
    component: Home,
    props: true,
  },
  {
    path: "/card_wsr_frontend/cardlist/:series",
    name: "CardListWithSeries",
    component: CardList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
