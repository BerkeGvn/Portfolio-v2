const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
