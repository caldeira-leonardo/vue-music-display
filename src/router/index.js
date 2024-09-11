import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/views/ConterView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/TodoView.vue')
    }
  ]
})

router.beforeEach((_, __, next) => {
  next()
})

export default router
