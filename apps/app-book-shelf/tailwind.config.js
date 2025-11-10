const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        masala: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#404040',
          950: '#262626',
        },
        'gray-chateau': {
          50: '#f5f7f8',
          100: '#edf0f2',
          200: '#dfe2e6',
          300: '#cad0d7',
          400: '#b4bbc5',
          500: '#99a1af',
          600: '#8a91a1',
          700: '#767c8c',
          800: '#616672',
          900: '#51545e',
          950: '#303236',
        },
      },
    },
  },
  plugins: [],
};
