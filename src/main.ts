import './assets/main.css'

import { createApp } from 'vue'
import AppRoot from './app-root.vue'
import router from './router'

const app = createApp(AppRoot)

app.use(router)

app.mount('#app')
