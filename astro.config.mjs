import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nataliianat55.github.io',
  base: '/ferdinando-balzarro',
  output: 'static',
  build: { assets: 'assets' },
  trailingSlash: 'always'
});
