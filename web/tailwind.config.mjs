import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
  
  	theme: {
    	extend: {
      	fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
      	},
      // Here is the new, semantic color palette
      	colors: {
        background: 'hsl(var(--background))',
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'border': 'hsl(var(--border))',
        'accent': 'hsl(var(--accent))',
        'accent-hover': 'hsl(var(--accent-hover))',
		}
    },
  },
  
  plugins: [],
}