import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import PublicDataPage from '@/pages/PublicDataPage.vue'

const publicPage = (path, name, componentName, endpoint = null) => ({
  path,
  name,
  component: PublicDataPage,
  meta: { componentName, endpoint }
})

const routes = [
  publicPage('/', 'home', 'Home', '/public/home'),
  publicPage('/profil', 'profil', 'Profil', '/public/profil'),
  publicPage('/news', 'news.index', 'NewsIndex', '/public/news'),
  publicPage('/news/:slug', 'news.detail', 'NewsDetail', route => `/public/news/${route.params.slug}`),
  publicPage('/prestasi', 'prestasi', 'PrestasiIndex', '/public/prestasi'),
  publicPage('/ppdb', 'ppdb', 'PPDB', '/public/ppdb'),
  publicPage('/ppdb/landing', 'ppdb.landing', 'PpdbLanding', '/public/ppdb/landing'),
  publicPage('/ppdb/daftar', 'ppdb.daftar', 'PpdbDaftar'),
  publicPage('/ppdb/sukses', 'ppdb.sukses', 'PpdbSukses'),
  publicPage('/ppdb/status', 'ppdb.status', 'PpdbStatus'),
  publicPage('/guru', 'guru', 'Guru', '/public/guru'),

  {
    path: '/yasmin-panel/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
    meta: {
      requiresGuest: true,
      title: 'Yasmin Panel | Login'
    }
  },
  {
    path: '/yasmin-panel',
    component: () => import('@/components/layout/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/yasmin-panel/dashboard' },
      { path: 'dashboard', name: 'Dashboard', component: () => import('@/views/Dashboard.vue'), meta: { title: 'Yasmin Panel | Dashboard' } },
      { path: 'berita', name: 'BeritaList', component: () => import('@/views/berita/BeritaList.vue'), meta: { title: 'Yasmin Panel | Kelola Berita' } },
      { path: 'berita/create', name: 'BeritaCreate', component: () => import('@/views/berita/BeritaForm.vue'), meta: { title: 'Yasmin Panel | Tambah Berita' } },
      { path: 'berita/edit/:id', name: 'BeritaEdit', component: () => import('@/views/berita/BeritaForm.vue'), meta: { title: 'Yasmin Panel | Edit Berita' } },
      { path: 'berita/trash', name: 'berita-trash', component: () => import('@/views/berita/BeritaTrash.vue'), meta: { title: 'Yasmin Panel | Sampah Berita' } },
      { path: 'ekskul', name: 'EkskulList', component: () => import('@/views/ekskul/EkskulList.vue'), meta: { title: 'Yasmin Panel | Kelola Ekskul' } },
      { path: 'pendaftar-ekskul', name: 'PendaftarEkskul', component: () => import('@/views/ekskul/PendaftarEkskulList.vue'), meta: { title: 'Yasmin Panel | Pendaftar Ekstrakurikuler' } },
      { path: 'galeri', name: 'Galeri', component: () => import('@/views/galeri/GaleriPage.vue'), meta: { title: 'Yasmin Panel | Kelola Galeri' } },
      { path: 'prestasi', name: 'PrestasiAdmin', component: () => import('@/views/prestasi/PrestasiList.vue'), meta: { title: 'Yasmin Panel | Kelola Prestasi' } },
      { path: 'pendaftar', name: 'Pendaftar', component: () => import('@/views/pendaftar/PendaftarList.vue'), meta: { title: 'Yasmin Panel | Data Pendaftar' } },
      { path: 'users', name: 'Users', component: () => import('@/views/users/UsersPage.vue'), meta: { title: 'Yasmin Panel | Kelola User' } },
      { path: 'ppdb', name: 'PpdbDashboard', component: () => import('@/views/ppdb/PpdbDashboard.vue'), meta: { title: 'Yasmin Panel | PPDB Dashboard' } },
      { path: 'ppdb/pendaftar', name: 'PpdbPendaftarList', component: () => import('@/views/ppdb/PpdbPendaftarList.vue'), meta: { title: 'Yasmin Panel | Pendaftar PPDB' } },
      { path: 'ppdb/pendaftar/:id', name: 'PpdbPendaftarDetail', component: () => import('@/views/ppdb/PpdbPendaftarDetail.vue'), meta: { title: 'Yasmin Panel | Detail Pendaftar PPDB' } },
      { path: 'ppdb/gelombang', name: 'PpdbGelombangList', component: () => import('@/views/ppdb/PpdbGelombangList.vue'), meta: { title: 'Yasmin Panel | Gelombang PPDB' } },
      { path: 'ppdb/seleksi', name: 'PpdbSeleksiList', component: () => import('@/views/ppdb/PpdbSeleksiList.vue'), meta: { title: 'Yasmin Panel | Seleksi PPDB' } },
      { path: 'ppdb/pengumuman', name: 'PpdbPengumumanList', component: () => import('@/views/ppdb/PpdbPengumumanList.vue'), meta: { title: 'Yasmin Panel | Pengumuman PPDB' } },
      { path: 'pengumuman', name: 'PengumumanList', component: () => import('@/views/pengumuman/PengumumanList.vue'), meta: { title: 'Yasmin Panel | Kelola Pengumuman' } },
      { path: 'pengumuman/create', name: 'PengumumanCreate', component: () => import('@/views/pengumuman/PengumumanForm.vue'), meta: { title: 'Yasmin Panel | Tambah Pengumuman' } },
      { path: 'pengumuman/edit/:id', name: 'PengumumanEdit', component: () => import('@/views/pengumuman/PengumumanForm.vue'), meta: { title: 'Yasmin Panel | Edit Pengumuman' } },
      { path: 'testimoni', name: 'TestimoniList', component: () => import('@/views/testimoni/TestimoniList.vue'), meta: { title: 'Yasmin Panel | Kelola Testimoni' } },
      { path: 'dokumen', name: 'DokumenList', component: () => import('@/views/dokumen/DokumenList.vue'), meta: { title: 'Yasmin Panel | Dokumen PPDB' } },
      { path: 'guru', name: 'GuruList', component: () => import('@/views/guru/GuruList.vue'), meta: { title: 'Yasmin Panel | Data Guru' } },
      { path: 'activity-logs', name: 'ActivityLogs', component: () => import('@/views/activity/ActivityLogs.vue'), meta: { title: 'Yasmin Panel | Activity Logs' } }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SMA Mutiara Insan Nusantara'

  const token = sessionStorage.getItem('admin_token')
  const userJson = sessionStorage.getItem('admin_user')
  const isAuthenticated = !!(token && userJson)
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const requiresGuest = to.matched.some((record) => record.meta.requiresGuest)

  if (requiresAuth && !isAuthenticated) {
    next('/yasmin-panel/login')
    return
  }

  if (requiresGuest && isAuthenticated) {
    next('/yasmin-panel/dashboard')
    return
  }

  if (isAuthenticated) {
    const { user } = useAuth()
    const parsedUser = user.value || JSON.parse(userJson)
    const role = parsedUser.role?.toLowerCase()

    if (role === 'admin' && to.path.startsWith('/yasmin-panel/ppdb')) {
      next('/yasmin-panel/dashboard')
      return
    }

    if (role === 'admin' && to.path === '/yasmin-panel/users') {
      next('/yasmin-panel/dashboard')
      return
    }
  }

  next()
})

export default router
