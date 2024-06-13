import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import config from './src/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [tailwind(), sitemap()],
  redirects: {
    "/": (import.meta.env.PROD) ? "/paginas-web-en-tabasco" : "/", 
  },
  output: "server",
  adapter: cloudflare({
    mode: 'directory',
}),
image: {
    service: {
        entrypoint: './src/image-service.ts',
    },
},
});