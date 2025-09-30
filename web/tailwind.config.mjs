/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
  	theme: {
    	extend: {
      	fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
      	},
      	colors: {
			orange: {
				'400': '#fb923c',
				'500': '#f97316',
				'600': '#ea580c',
				'700': '#f59e0b',
			},
		}
    },
  },
  plugins: [],
}
