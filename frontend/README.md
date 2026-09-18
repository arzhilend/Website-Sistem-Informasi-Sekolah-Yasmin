# Yasmin Frontend

Frontend standalone Vue/Vite untuk deploy ke Vercel. Backend tetap Laravel dan dipakai sebagai API.

## Development

```powershell
cd frontend
copy .env.example .env
npm install
npm run dev
```

Isi `.env` lokal:

```env
VITE_API_BASE_URL=http://profil-yasmin.test
```

## Vercel

Set project Vercel ke folder `frontend`.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_BASE_URL=https://domain-backend-laravel-kamu.com`

## Backend Laravel

Laravel tetap deploy normal sebagai backend/API. Pastikan `.env` backend punya:

```env
APP_URL=https://domain-backend-laravel-kamu.com
FRONTEND_URL=https://domain-frontend-vercel-kamu.vercel.app
SANCTUM_STATEFUL_DOMAINS=domain-frontend-vercel-kamu.vercel.app
SESSION_DOMAIN=
```

Public page data tersedia dari endpoint:

```text
/api/public/home
/api/public/profil
/api/public/news
/api/public/news/{slug}
/api/public/prestasi
/api/public/ppdb
/api/public/ppdb/landing
/api/public/guru
```
