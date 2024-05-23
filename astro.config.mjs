import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import config from './src/config';

// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [tailwind(), sitemap()]
});