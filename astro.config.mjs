// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crosscreate.org',
  output: 'static',
  compressHTML: true,
  build: {
    // Keep stylesheets external so the strict CSP in public/_headers holds.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Astro inlines small module scripts; force them into /_astro/*.js
      // so the strict `script-src 'self'` CSP in public/_headers holds.
      assetsInlineLimit: 0,
    },
  },
});
