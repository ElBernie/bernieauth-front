/** @type {import('tailwindcss').Config} */
import pluginForms from '@tailwindcss/forms';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [pluginForms],
};
