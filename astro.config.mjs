// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jajanku.app',

  // To enable serving the site to other devices on network when developing
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});