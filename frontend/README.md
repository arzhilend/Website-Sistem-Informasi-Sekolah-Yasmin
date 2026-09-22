# Yasmin Frontend

Frontend standalone Vue/Vite untuk deploy ke Vercel.

Data publik saat ini memakai konten hardcode dari `src/data/staticContent.js`, jadi frontend tidak perlu dihubungkan ke backend Laravel.

## Development

```powershell
cd frontend
npm install
npm run dev
```

## Vercel

Set project Vercel ke folder `frontend`.

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: kosongkan

## Konten

Berita standalone hanya memakai satu artikel:

`Perancangan Sistem Informasi Profil dan Manajemen Konten Sekolah Berbasis Web pada Yayasan Nusantara`

Sumber:

`https://zonaaktual.com/2025/12/17/perancangan-sistem-informasi-profil-dan-manajemen-konten-sekolah-berbasis-web-pada-yayasan-nusantara/`
