// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // The Tailwind integration must be listed first.
    // This setup ensures it processes your CSS correctly.
    tailwind({
      applyBaseStyles: true,
    }), 
    react()
  ]
});

