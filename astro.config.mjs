import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import config from './src/config';

// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [tailwind(), sitemap()],
  build:{
    assets:{
      headers:{
        'Cache-Control': 'public, max-age=31536000, immutable',
      }
    }
  }
});