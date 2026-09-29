// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    // Tailwind v4 runs as a Vite plugin; global.css is imported by BaseLayout.
    plugins: [tailwindcss()],
  },
});
