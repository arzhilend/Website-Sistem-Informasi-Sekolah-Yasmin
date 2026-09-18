<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicPageController;

Route::get('/', fn () => response()->json([
    'name' => config('app.name'),
    'status' => 'ok',
    'frontend_url' => config('app.frontend_url'),
]));

Route::get('/sitemap.xml', [PublicPageController::class, 'sitemap'])->name('sitemap');
