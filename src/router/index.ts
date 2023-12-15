import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/Home-View.vue'
import { useProjectsStore } from '@/stores/projects/projects.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: HomeView,
      beforeEnter: async () => {
        const projectsStore = useProjectsStore()
        projectsStore.projects = projectsStore.GetProjects()
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/Projects-View.vue'),
      beforeEnter: async () => {
        const projectsStore = useProjectsStore()
        projectsStore.projects = projectsStore.GetProjects()
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error/Error-View.vue')
    }
  ]
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
