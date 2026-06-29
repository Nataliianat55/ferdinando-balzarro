import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ferdinandobalzarro.it',
  output: 'static',
  build: {
    assets: 'assets'
  },
  trailingSlash: 'always'
});
