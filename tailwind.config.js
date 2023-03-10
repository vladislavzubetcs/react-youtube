const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            mulish: ["'Mulish'", ...defaultTheme.fontFamily.sans],
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            "transparent-black": '#0000003D',
            black: '#19202C',
            white: '#FFFFFF',
            silver: '#C2C2C2',
            gray: '#898989',
            "transparent-light-gray": '#EBEBEB4D',
            "light-gray": '#EBEBEB',
            red: '#FF0000',
        },
        extend: {
            gridTemplateColumns: {
                'header': '1fr auto auto',
                'header-desktop': '14rem auto auto',
            }
        },
    },
    plugins: [
        plugin(({addBase, theme}) => {
            addBase({
                body: {
                    fontSize: theme('fontSize.160'),
                    backgroundColor: theme('colors.white'),
                    color: theme('colors.black'),
                    fontFamily: theme('fontFamily.mulish'),
                },
            });
        }),
    ],
};
