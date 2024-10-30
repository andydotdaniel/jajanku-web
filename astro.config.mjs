// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jajanku.app',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),

  // To enable serving the site to other devices on network when developing
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});