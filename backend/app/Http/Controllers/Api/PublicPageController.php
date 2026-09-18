<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Ekstrakurikuler;
use App\Models\Gallery;
use App\Models\Guru;
use App\Models\News;
use App\Models\PpdbWave;
use App\Models\Prestasi;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PublicPageController extends Controller
{
    public function home()
    {
        return response()->json([
            'featuredNews' => Cache::remember('api_featured_news_home', 600, function () {
                return News::published()
                    ->featured()
                    ->latest('published_at')
                    ->limit(6)
                    ->get()
                    ->map(fn ($news) => $this->formatNewsItem($news));
            }),
            'galleries' => Cache::remember('api_galleries_home', 600, function () {
                return Gallery::with('images')
                    ->where('is_active', true)
                    ->whereNotNull('grid_position')
                    ->whereNotNull('image_path')
                    ->where('image_path', '!=', '')
                    ->orderBy('grid_position')
                    ->get()
                    ->map(fn ($gallery) => [
                        'id' => $gallery->id,
                        'title' => $gallery->title ?? 'Galeri',
                        'image' => $gallery->image_path ? $this->storageUrl($gallery->image_path) : null,
                        'grid_position' => $gallery->grid_position,
                        'all_images' => collect($gallery->all_images)->map(fn ($path) => $this->normalizeAssetUrl($path))->all(),
                        'image_count' => count($gallery->all_images),
                    ])
                    ->filter(fn ($gallery) => $gallery['image'] !== null)
                    ->values();
            }),
            'prestasi' => Cache::remember('api_prestasi_home', 600, function () {
                return Prestasi::latest()
                    ->limit(6)
                    ->get()
                    ->map(fn ($item) => $this->formatPrestasiItem($item));
            }),
            'ekstrakurikuler' => Cache::remember('api_ekskul_home', 600, function () {
                return Ekstrakurikuler::withCount([
                    'registrations as approved_count' => fn ($query) => $query->where('status', 'approved'),
                ])
                    ->where('is_active', true)
                    ->whereNotNull('nama')
                    ->where('nama', '!=', '')
                    ->get()
                    ->map(fn ($item) => [
                        'id' => $item->id,
                        'name' => $item->nama ?? 'Ekstrakurikuler',
                        'category' => $item->badge ?? 'Akademik',
                        'tagline' => $item->tagline ?? '',
                        'description' => $item->deskripsi ?? '',
                        'image' => $item->gambar ? $this->storageUrl($item->gambar) : null,
                        'schedule' => $item->jadwal ?? '',
                        'location' => $item->lokasi ?? '',
                        'mentor' => $item->pembina ?? '',
                        'benefits' => is_string($item->benefits) ? json_decode($item->benefits, true) : ($item->benefits ?? []),
                        'max_participants' => $item->max_participants ?? null,
                        'approved_registrations_count' => $item->approved_registrations_count,
                        'available_slots' => $item->available_slots,
                        'is_slot_full' => $item->is_slot_full,
                        'is_registration_open' => $item->is_registration_open,
                        'registration_deadline' => $item->registration_deadline ?? null,
                        'registration_closure_reason' => $item->registration_closure_reason ?? null,
                    ]);
            }),
            'testimonials' => Cache::remember('api_testimonials_home', 600, function () {
                return Testimonial::where('is_active', true)
                    ->whereNotNull('author')
                    ->whereNotNull('text')
                    ->where('author', '!=', '')
                    ->where('text', '!=', '')
                    ->orderBy('order')
                    ->get()
                    ->map(fn ($item) => [
                        'id' => $item->id,
                        'name' => $item->author ?? 'Anonim',
                        'role' => $item->role ?? '',
                        'content' => $item->text ?? '',
                        'image' => $item->photo ? $this->storageUrl($item->photo) : null,
                    ]);
            }),
            'meta' => [
                'title' => 'SMA Mutiara Insan Nusantara - Beranda',
                'description' => 'Sekolah menengah atas yang berkomitmen menghasilkan generasi cerdas, berkarakter, dan berprestasi di Tangerang.',
                'keywords' => 'SMA Mutiara Insan Nusantara, SMA Yasmin, SMA Rajeg, sekolah tangerang, sekolah terbaik tangerang',
                'og_type' => 'website',
            ],
        ]);
    }

    public function profil()
    {
        return response()->json([
            'guru' => Guru::orderBy('id')->get()->map(fn ($guru) => [
                'id' => $guru->id,
                'name' => $guru->name,
                'position' => $guru->position,
                'image' => $guru->image ? $this->storageUrl($guru->image) : null,
            ]),
            'meta' => [
                'title' => 'Profil Sekolah - SMA Mutiara Insan Nusantara',
                'description' => 'Profil lengkap SMA Mutiara Insan Nusantara, visi misi, sejarah, dan tenaga pendidik.',
                'og_type' => 'website',
            ],
        ]);
    }

    public function news(Request $request)
    {
        $query = News::published()->latest('published_at');

        if ($request->filled('search')) {
            $query->search($request->get('search'));
        }

        if ($request->filled('category') && $request->get('category') !== 'all') {
            $query->byCategory($request->get('category'));
        }

        return response()->json([
            'news' => $query->paginate($request->integer('per_page', 12))
                ->through(fn ($item) => $this->formatNewsItem($item)),
            'filters' => [
                'search' => $request->get('search'),
                'category' => $request->get('category'),
            ],
            'meta' => [
                'title' => 'Berita Sekolah - SMA Mutiara Insan Nusantara',
                'description' => 'Berita terbaru dan informasi kegiatan SMA Mutiara Insan Nusantara.',
                'og_type' => 'website',
            ],
        ]);
    }

    public function newsDetail(string $slug)
    {
        $news = News::published()->where('slug', $slug)->firstOrFail();
        $news->incrementViews();

        $newsData = [
            'id' => $news->id,
            'title' => $news->title,
            'slug' => $news->slug,
            'content' => $news->content,
            'excerpt' => $news->excerpt,
            'location' => $news->location,
            'image' => $news->image ? $this->storageUrl($news->image) : null,
            'gallery' => $news->gallery ? array_map(fn ($img) => $this->storageUrl($img), $news->gallery) : [],
            'category' => $news->category,
            'author' => $news->author,
            'views' => $news->getRealViews(),
            'date' => $news->published_at->format('Y-m-d'),
            'formatted_date' => $news->published_at->format('d F Y'),
        ];

        return response()->json([
            'news' => $newsData,
            'relatedNews' => $news->getRelatedNews(3)->map(fn ($item) => $this->formatNewsItem($item)),
            'meta' => [
                'title' => $news->title . ' - SMA Mutiara Insan Nusantara',
                'description' => Str::limit(strip_tags($news->content), 160),
                'og_type' => 'article',
                'og_title' => $news->title,
                'og_description' => Str::limit(strip_tags($news->content), 160),
                'og_image' => $news->image ? $this->storageUrl($news->image) : url('/images/og-image.png'),
            ],
        ]);
    }

    public function prestasi(Request $request)
    {
        return response()->json([
            'prestasi' => Prestasi::latest()
                ->paginate($request->integer('per_page', 12))
                ->through(fn ($item) => $this->formatPrestasiItem($item)),
            'meta' => [
                'title' => 'Prestasi Siswa - SMA Mutiara Insan Nusantara',
                'description' => 'Daftar prestasi dan pencapaian siswa-siswi SMA Mutiara Insan Nusantara di berbagai bidang.',
                'og_type' => 'website',
            ],
        ]);
    }

    public function ppdb()
    {
        return response()->json([
            'documents' => $this->documents(),
            'meta' => [
                'title' => 'Informasi PPDB - SMA Mutiara Insan Nusantara',
                'description' => 'Informasi Penerimaan Peserta Didik Baru (PPDB) SMA Mutiara Insan Nusantara.',
                'keywords' => 'PPDB SMA Yasmin, pendaftaran siswa baru tangerang, PPDB SMA Mutiara',
                'og_type' => 'website',
            ],
        ]);
    }

    public function ppdbLanding()
    {
        $activeWave = PpdbWave::open()->first();
        $academicYear = $activeWave ? $activeWave->academic_year : (date('Y') . '/' . (date('Y') + 1));

        return response()->json([
            'documents' => $this->documents(),
            'academicYear' => $academicYear,
            'meta' => [
                'title' => 'PPDB ' . $academicYear . ' - SMA Mutiara Insan Nusantara',
                'description' => 'Pendaftaran Peserta Didik Baru SMA Mutiara Insan Nusantara Tahun Ajaran ' . $academicYear,
            ],
        ]);
    }

    public function guru()
    {
        return response()->json([
            'guru' => Guru::orderBy('id')->get()->map(fn ($guru) => [
                'id' => $guru->id,
                'name' => $guru->name,
                'position' => $guru->position,
                'nip' => $guru->nip,
                'education' => $guru->education,
                'image' => $guru->image ? $this->storageUrl($guru->image) : null,
            ]),
            'meta' => [
                'title' => 'Tenaga Pendidik - SMA Mutiara Insan Nusantara',
                'description' => 'Daftar guru dan tenaga pendidik SMA Mutiara Insan Nusantara.',
                'og_type' => 'website',
            ],
        ]);
    }

    public function sitemap()
    {
        $frontendUrl = rtrim(config('app.frontend_url'), '/');
        $news = News::published()
            ->select('slug', 'updated_at')
            ->latest()
            ->get();

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        $staticPages = [
            ['loc' => $frontendUrl . '/', 'changefreq' => 'weekly', 'priority' => '1.0'],
            ['loc' => $frontendUrl . '/profil', 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $frontendUrl . '/news', 'changefreq' => 'daily', 'priority' => '0.9'],
            ['loc' => $frontendUrl . '/prestasi', 'changefreq' => 'weekly', 'priority' => '0.7'],
            ['loc' => $frontendUrl . '/ppdb', 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $frontendUrl . '/guru', 'changefreq' => 'monthly', 'priority' => '0.6'],
        ];

        foreach ($staticPages as $page) {
            $xml .= '<url>';
            $xml .= '<loc>' . htmlspecialchars($page['loc']) . '</loc>';
            $xml .= '<changefreq>' . $page['changefreq'] . '</changefreq>';
            $xml .= '<priority>' . $page['priority'] . '</priority>';
            $xml .= '</url>';
        }

        foreach ($news as $item) {
            $xml .= '<url>';
            $xml .= '<loc>' . htmlspecialchars($frontendUrl . '/news/' . $item->slug) . '</loc>';
            $xml .= '<lastmod>' . $item->updated_at->toIso8601String() . '</lastmod>';
            $xml .= '<changefreq>weekly</changefreq>';
            $xml .= '<priority>0.7</priority>';
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return response($xml, 200)->header('Content-Type', 'application/xml');
    }

    private function documents()
    {
        return Document::where('is_active', true)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(fn ($doc) => [
                'id' => $doc->id,
                'title' => $doc->title,
                'description' => $doc->description,
                'file_name' => $doc->file_name,
                'file_type' => $doc->file_type,
                'file_size' => $doc->file_size,
                'created_at' => $doc->created_at?->format('Y-m-d'),
            ]);
    }

    private function formatNewsItem($news): array
    {
        return [
            'id' => $news->id,
            'title' => $news->title,
            'slug' => $news->slug,
            'excerpt' => $news->excerpt,
            'location' => $news->location,
            'image' => $news->image ? $this->storageUrl($news->image) : url('/images/placeholder-news.jpg'),
            'category' => $news->category,
            'date' => $news->published_at->format('Y-m-d'),
            'formatted_date' => $news->published_at->format('d F Y'),
            'views' => $news->getRealViews(),
        ];
    }

    private function formatPrestasiItem($prestasi): array
    {
        $imagePath = null;
        if ($prestasi->image) {
            $imagePath = str_starts_with($prestasi->image, 'prestasi/')
                ? $prestasi->image
                : 'prestasi/' . $prestasi->image;
        }

        return [
            'id' => $prestasi->id,
            'title' => $prestasi->nama_prestasi,
            'description' => $prestasi->deskripsi,
            'category' => $prestasi->kategori,
            'level' => $prestasi->tingkat,
            'year' => $prestasi->tahun,
            'participants' => $prestasi->peserta,
            'image' => $imagePath ? $this->storageUrl($imagePath) : null,
            'image_crop' => $prestasi->image_crop,
            'slug' => $prestasi->slug,
        ];
    }

    private function storageUrl(string $path): string
    {
        return url(Storage::url($path));
    }

    private function normalizeAssetUrl(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        if (Str::startsWith($path, ['http://', 'https://'])) {
            return $path;
        }

        return Str::startsWith($path, '/')
            ? url($path)
            : $this->storageUrl($path);
    }
}
