import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-route',
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
    },

    {
      //GAME CHANGER
      path: '/musicDetails/:id',
      name: 'music.details',
      component: () => import('@/views/ArtistView.vue'),
      props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      children: [
        {
          path: 'musics',
          name: 'musics',
          component: () => import('@/views/ConterView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((_, __, next) => {
  next()
})

export default router
