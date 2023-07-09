/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				threadsPattern: 'url("/imgs/threadsPattern.svg")'
			}
		},
		fontFamily: {
			sans: ['Space Grotesk Variable', 'sans-serif']
		}
	},

	plugins: []
}

module.exports = config
