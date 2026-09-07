import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ferdinandobalzarro.it',
  output: 'static',
  build: {
    assets: 'assets'
  },
  trailingSlash: 'always',
  integrations: [sitemap()]
});
