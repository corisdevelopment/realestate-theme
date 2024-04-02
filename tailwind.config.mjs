/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gold': '#C89919',
				'dark-gold': '#B98B3F',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
