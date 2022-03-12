module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'theme-f1': ['"Merriweather"', "serif"],
            'theme-f2': ['"Montserrat"', "serif"],
        },
        fontSize: {
            'xs': '12px',
            'sm': '14px',
            'base': '16px',
            'lg': '20px',
            'xl': '24px',
            '2xl': '1.6rem',
            '3xl': '1.95rem',
        },
        extend: {
            spacing: {
                '256': '42rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};