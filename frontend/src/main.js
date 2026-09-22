import './css/app.css'

import axios from 'axios'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import Swal from 'sweetalert2'
import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import { useAuth } from './composables/useAuth'
import { useThemeStore } from './stores/theme'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios = axios
window.Swal = Swal

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(createHead())
app.use(router)
app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  lazyComponent: true,
  observerOptions: {
    rootMargin: '50px',
    threshold: 0.1
  }
})

router.isReady().then(() => {
  app.mount('#app')

  const { initAuth } = useAuth()
  initAuth()

  const themeStore = useThemeStore()
  themeStore.initTheme()
})
