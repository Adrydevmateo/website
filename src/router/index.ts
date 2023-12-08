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
      children: [
        {
          path: ':project',
          name: 'single-project',
          component: () => import('@/views/projects/single-project/Single-Project-View.vue'),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error/Error-View.vue')
    },
  ]
})

export default router
