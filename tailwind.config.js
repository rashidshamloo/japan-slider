/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        brightBlue: '#ECF2F8',
        grayishBlue: '#5B6B8D',
        brightGrayishBlue: '#7B8BaD',
        brightGrayishBlue2: '#9BaBcD',
        brightGrayishBlue3: '#bBcBeD',
        accent: '#E83151',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
