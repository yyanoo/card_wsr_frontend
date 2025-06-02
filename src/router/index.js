import { createRouter, createWebHistory } from 'vue-router'
import CardList from '../components/CardList.vue'

const routes = [
  {
    path: '/cardlist',
    name: 'CardList',
    component: CardList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
