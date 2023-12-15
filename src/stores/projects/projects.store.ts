import { defineStore } from 'pinia'
import type { TProjectsStoreState } from './projects.store.types'
import type { TProject, TProjectTag } from '@/views/projects/Projects.types'

export const useProjectsStore = defineStore('projects', {
  state: (): TProjectsStoreState => {
    return {
      projects: []
    }
  },
  getters: {},
  actions: {
    GetProjects(): Array<TProject> {
      return [
        {
          id: crypto.randomUUID(),
          name: {
            en: 'to-do app',
            es: 'tareas'
          },
          description: {
            en: 'Crafted with HTML, CSS, and JS for a seamless user experience. Easily manage tasks, and enjoy responsive design for on-the-go productivity. Streamlined and intuitive, this app keeps you organized effortlessly.',
            es: 'Diseñado con HTML, CSS y JS para una experiencia de usuario perfecta. Administre tareas fácilmente y disfrute de un diseño responsivo para una productividad en movimiento. Optimizada e intuitiva, esta aplicación te mantiene organizado sin esfuerzo.'
          },
          image:
            'https://raw.githubusercontent.com/Adrydevmateo/todo-prototype/main/public/en-preview.png',
          documentation_link: '',
          repository_link: 'https://github.com/Adrydevmateo/todo-prototype/tree/main',
          site_link: 'https://adrydev-todoprototype.netlify.app/',
          tags: ['web-development', 'html', 'css', 'js'],
          main_technologies: [
            { name: 'html', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'css', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'js', link: 'https://developer.mozilla.org/en-US/docs/Web/JAVASCRIPT' }
          ]
        }
      ]
    },
    // #region FILTER PROJECTS
    GetFilteredProjects(filter: TProjectTag): Array<TProject> {
      return this.projects.filter((project: TProject) => project.tags.includes(filter))
    }
    // #endregion FILTER PROJECTS
  }
})
