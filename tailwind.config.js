/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'zellyo-green': {
                    DEFAULT: '#0F4C38',
                    dark: '#0a3527',
                    light: '#1a4d3c',
                },
                'zellyo-cream': '#FFFEFA',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                samsung: ['"Samsung Sharp Sans"', 'sans-serif'],
            },
            animation: {
                'scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
