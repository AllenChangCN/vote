let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// reference:https://stackoverflow.com/questions/42047874/laravel-5-4-mix-how-to-run-browser-live-reload
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            files: [
                'app/**/*',
                'public/**/*',
                'resources/views/**/*',
                'routes/**/*'
            ]
        })
    ]
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
