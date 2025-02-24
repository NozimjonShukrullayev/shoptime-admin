import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				backgroundSoft: 'var(--background-soft)',
				backgroundAdd: 'var(--background-additional)',
				foreground: 'var(--text)',
				foregroundSoft: 'var(--text-soft)',
				button: 'var(--button)',
			},
		},
	},
	plugins: [],
} satisfies Config
