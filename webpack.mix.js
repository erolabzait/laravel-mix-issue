let mix = require('laravel-mix');

mix
  .copyDirectory('custom-theme/', 'live-theme')
  .postCss('src/styles/main.css', 'live-theme/assets')
  .js('src/js/custom.js', 'live-theme/assets')
  .options({ processCssUrls: false });
