import './css/app.css'

import axios from 'axios'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import Swal from 'sweetalert2'
import { createApp, h } from 'vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import { useAuth } from './composables/useAuth'
import { useThemeStore } from './stores/theme'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

axios.defaults.baseURL = apiBaseUrl || undefined
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios = axios
window.Swal = Swal

if (apiBaseUrl) {
  const nativeFetch = window.fetch.bind(window)
  window.fetch = (input, init) => {
    if (typeof input === 'string' && input.startsWith('/api/')) {
      return nativeFetch(`${apiBaseUrl}${input}`, init)
    }

    return nativeFetch(input, init)
  }
}

const app = createApp({ render: () => h('router-view') })
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
