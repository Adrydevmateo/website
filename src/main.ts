import './assets/styles/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')

watch(pinia.state, (state) => {
    localStorage["main"] = JSON.stringify(state.main)
}, { deep: true })