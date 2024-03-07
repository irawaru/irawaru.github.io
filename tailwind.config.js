/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			cursor: {
				epic: 'url("/src/lib/images/lil_hamster.svg"), url("/src/lib/images/lil_rat.png"), auto'
			},
			keyframes: {
				grow: {
					from: { transform: 'scale(0)' },
					to: { transform: 'scale(1)' }
				},
				growspin: {
					from: { transform: 'scale(0) rotate(0deg)' },
					to: { transform: 'scale(1.5) rotate(360deg)' }
				},
				gradient: {
					to: { 'background-position': '200% center' }
				}
			},
			animation: {
				grow: 'grow 0.5s infinite alternate',
				growspin: 'growspin 0.7s infinite alternate',
				gradient: 'gradient 1s linear infinite'
			}
		}
	},
	plugins: [],
	prefix: 'tw-'
};
