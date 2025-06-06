/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        screens: {
            mobile: {max : '480px'},
            pad: { max: '768px' },
        },
        fontFamily: {
            SunBatang: ['SunBatang-Light'],
            naum: ['Nanum Myeongjo'],
            arita: ['Arita-buri-SemiBold'],
            suite: ['SUITE-Regular'],
            kotra: ['KOTRAHOPE'],
            seoul: ['SeoulHangangM'],
        },

        extend: {
            keyframes: {
                myTransition: 'myTransition 1s ease-in',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                lightgreen: '#90EE90',
              },
        },
    },
    plugins: [],
};
