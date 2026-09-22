<template>
  <component v-if="pageComponent" :is="pageComponent" v-bind="pageProps" />
  <div v-else class="min-h-screen grid place-items-center bg-white text-gray-700">
    Halaman tidak ditemukan.
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getStaticPageData } from '@/data/staticContent'

import Home from './Home.vue'
import Profil from './Profil.vue'
import PPDB from './PPDB.vue'
import PpdbLanding from './PpdbLanding.vue'
import PpdbDaftar from './PpdbDaftar.vue'
import PpdbSukses from './PpdbSukses.vue'
import PpdbStatus from './PpdbStatus.vue'
import Guru from './Guru.vue'
import NewsIndex from './News/Index.vue'
import NewsDetail from './News/NewsDetail.vue'
import PrestasiIndex from './Prestasi/Index.vue'

const route = useRoute()
const pageProps = ref({})

const components = {
  Home,
  Profil,
  PPDB,
  PpdbLanding,
  PpdbDaftar,
  PpdbSukses,
  PpdbStatus,
  Guru,
  NewsIndex,
  NewsDetail,
  PrestasiIndex
}

const pageComponent = computed(() => components[route.meta.componentName])

const resolveEndpoint = () => {
  if (typeof route.meta.endpoint === 'function') {
    return route.meta.endpoint(route)
  }

  return route.meta.endpoint
}

const loadPage = async () => {
  const endpoint = resolveEndpoint()
  pageProps.value = {}

  if (!endpoint) {
    return
  }

  pageProps.value = getStaticPageData(endpoint)
}

loadPage()
onMounted(loadPage)
watch(() => [route.fullPath, route.meta.endpoint], loadPage)
</script>
