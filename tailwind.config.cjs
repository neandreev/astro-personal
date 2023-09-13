/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["Oswald", "Adjusted Tahoma Fallback", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
