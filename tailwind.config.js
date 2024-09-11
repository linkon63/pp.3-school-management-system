/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [
        require('tailwindcss-primeui'),
        function ({ addUtilities }) {
            // Use for text Shadow-----------------------
            addUtilities(
                {
                    '.text-shadow': {
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                    },
                    '.text-shadow-md': {
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)'
                    },
                    '.text-shadow-lg': {
                        textShadow: '0 4px 10px rgb(0, 0, 0)'
                    }
                },
                ['responsive', 'hover']
            );
        }
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        },
        extend: {
            // Use for floting animation----------------
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) ' },
                    '50%': { transform: 'translateY(-10px) ' }
                }
            },
            animation: {
                float: 'float 2s ease-in-out infinite'
            },
            boxShadow: {
                // Use for text Shadow-----------------
                text: '0 1px 3px rgba(0, 0, 0, 0.3)',
                'text-md': '0 2px 6px rgb(0, 0, 0)',
                'text-lg': '0 4px 8px rgba(0, 0, 0, 0)'
            },
            fontFamily: {
                // Google Font------------
                Nerko: ['Nerko One', 'cursive'],
                Archivo: ['Archivo Black', 'sans-serif']

                // Add more fonts here
            }
        }
    }
};
