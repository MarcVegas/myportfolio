import { createApp } from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'

import './index.css'
import './css/shared.css'

const vueapp = createApp({})

vueapp.use(Meta)

createApp(App).mount('#app')
