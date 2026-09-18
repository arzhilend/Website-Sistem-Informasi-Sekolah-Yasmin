<?php

$frontendUrls = array_filter(
    array_map('trim', explode(',', env('FRONTEND_URL', 'http://localhost:5173,http://localhost:3000')))
);

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
        'storage/*',
        '*',
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => array_values(array_unique(array_merge(
        $frontendUrls,
        [
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:3000',
            'http://127.0.0.1:3000',
        ]
    ))),

    'allowed_origins_patterns' => array_filter([
        // Allow all Vercel deployments (production, branch, and preview URLs)
        '/^https:\/\/([a-z0-9\-_\.]+\.)?vercel\.app$/',
        // Allow subdomains of APP_DOMAIN if set
        env('APP_DOMAIN') ? '/^https?:\/\/([a-z0-9\-]+\.)?' . preg_quote(env('APP_DOMAIN'), '/') . '$/' : null,
    ]),

    'allowed_headers' => ['*'],

    'exposed_headers' => ['Authorization'],

    'max_age' => 0,

    'supports_credentials' => true,

];
