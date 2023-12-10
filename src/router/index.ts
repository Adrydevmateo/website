import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/Home-View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/Projects-View.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error/Error-View.vue')
    },
  ]
})

export default router
