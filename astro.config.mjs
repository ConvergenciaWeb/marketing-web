import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import config from './src/config';


// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [tailwind(), sitemap()],
  redirects: (import.meta.env.PROD) ? {
    "/": "/paginas-web-en-tabasco", 
  } : {},
  output: "output",
  image: {
    service: {
        entrypoint: './src/image-service.ts',
    },
  },
});
