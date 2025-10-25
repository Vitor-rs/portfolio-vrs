/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                // Professional color scheme
                'primary': '#3B82F6',      // Modern blue
                'primary-dark': '#2563EB', // Darker blue for hover
                'secondary': '#10B981',     // Professional green
                'secondary-dark': '#059669',// Darker green for hover
                'accent': '#8B5CF6',        // Purple accent
                'dark': '#0F172A',          // Dark slate
                'dark-light': '#1E293B',    // Lighter dark for cards
                'light': '#F8FAFC',         // Very light gray
                'light-dark': '#E2E8F0',    // Slightly darker light
            }
        },
        fontFamily: {
            'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
        }
	},
	plugins: [],
}
