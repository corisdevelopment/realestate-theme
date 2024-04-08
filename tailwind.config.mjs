/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gold': '#C89919',
				'light-gold': '#C7AA69',
				'dark-gold': '#B98B3F',
				'golden': {
					'50': '#f8f6ee',
					'100': '#ede7d4',
					'200': '#ddd0ab',
					'300': '#c9b17b',
					'400': '#b59250',
					'500': '#a98449',
					'600': '#916a3d',
					'700': '#755033',
					'800': '#634430',
					'900': '#563a2d',
					'950': '#311e17',
				},
			},
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
