import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				foreground: 'rgb(var(--foreground-rgb))',
				backgroundStart: 'rgb(var(--background-start-rgb))',
				backgroundEnd: 'rgb(var(--background-end-rgb))',
				'red-600': '#D3302C',
				'yellow-500': '#F3A22D',
				'gray-700': '#495460',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Add a modern sans-serif font
			},
			transitionTimingFunction: {
				'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
			},
		},
	},
	plugins: [],
}

export default config
