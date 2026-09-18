# 🏫 SMA Mutiara Insan Nusantara - Website & CMS (Monorepo)

Website sistem informasi sekolah SMA Yayasan Mutiara Insan Nusantara dengan PPDB Online, CMS Admin, dan Landing Page modern.

Proyek ini menggunakan arsitektur **Monorepo 2 Folder**:
* 📁 [`frontend/`](frontend) - Standalone Vue 3 (Vite SPA) siap deploy ke **Vercel**.
* 📁 [`backend/`](backend) - Standalone Laravel 11 REST API siap deploy ke **Server / VPS / Laravel Cloud**.

---

## 📁 Struktur Monorepo

```
profil_yasmin/
├── backend/                   # [LARAVEL 11 REST API]
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   ├── Models/
│   │   └── Traits/
│   ├── config/cors.php        # Whitelist domain Vercel & localhost
│   ├── database/              # Migrations & Seeders
│   ├── routes/
│   │   ├── api.php            # Endpoint API publik & admin
│   │   └── web.php            # Health check & Sitemap
│   ├── storage/app/public/    # Upload media / gambar
│   ├── .env.example           # Template environment lokal
│   ├── .env.production.example# Template environment produksi
│   └── artisan
│
├── frontend/                  # [VUE 3 + VITE SPA]
│   ├── src/
│   │   ├── components/        # Komponen UI
│   │   ├── pages/             # Halaman publik (Home, Profil, Guru, PPDB, dll)
│   │   ├── views/             # Admin Panel (/yasmin-panel)
│   │   ├── router/            # Vue Router 4
│   │   ├── stores/            # Pinia stores
│   │   └── utils/image.js     # Resolver URL media dari storage backend
│   ├── vercel.json            # Konfigurasi rewrite SPA & asset caching
│   ├── .env.example           # Template env VITE_API_BASE_URL
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🛠️ Panduan Development Lokal

### 1. Backend (Laravel via Herd)

Buka terminal pada folder `backend`:

```bash
cd backend

# Setup environment
copy .env.example .env

# Generate APP_KEY
php artisan key:generate

# Migrasi & Seeder Database
php artisan migrate --seed

# Symlink Storage (Wajib untuk akses gambar publik)
php artisan storage:link
```

> **Laravel Herd:** Di Laravel Herd, Anda dapat melakukan *link* atau *park* pada folder `backend`:
> ```bash
> cd backend
> herd link profil-yasmin-api
> ```
> Backend akan dapat diakses di: `http://profil-yasmin-api.test`

---

### 2. Frontend (Vue 3 SPA)

Buka terminal pada folder `frontend`:

```bash
cd frontend

# Setup environment
copy .env.example .env

# Sesuaikan VITE_API_BASE_URL di .env mengarah ke domain backend Herd Anda, contoh:
# VITE_API_BASE_URL=http://profil-yasmin-api.test

# Install dependencies
npm install

# Jalankan server frontend
npm run dev
```

Frontend akan berjalan di: `http://localhost:5173`.

---

## 🚢 Panduan Deployment

### A. Deploy Frontend ke Vercel

1. Buka [Vercel Dashboard](https://vercel.com) -> **Add New Project**.
2. Hubungkan repositori GitHub ini.
3. Pada opsi **Root Directory**, pilih folder: `frontend`.
4. Framework Preset: `Vite`.
5. Tambahkan **Environment Variable**:
   * `VITE_API_BASE_URL` = `https://api.domain-backend-anda.com`
6. Klik **Deploy**.

### B. Deploy Backend ke Server (VPS / Cloud / Forge)

1. Deploy isi folder `backend/` ke server.
2. Salin `.env.production.example` menjadi `.env`:
   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://api.domain-backend-anda.com
   FRONTEND_URL=https://project-anda.vercel.app
   ```
3. Jalankan:
   ```bash
   composer install --no-dev --optimize-autoloader
   php artisan key:generate
   php artisan migrate --force
   php artisan storage:link
   php artisan config:cache
   php artisan route:cache
   ```

---

## 📄 License

MIT License.
