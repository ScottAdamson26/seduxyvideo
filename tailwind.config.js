module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default sans-serif font to Montserrat
      },
      colors: {
        customPink: {
          light: '#ff4082',
          DEFAULT: '#ed3b79',
          dark: '#ef3b7a',
        },
        customBlue: {
          light: '#92ffff',
          DEFAULT: '#74fefe',
          dark: '#6cfefe',
        }
      },
    },
  },
  plugins: [],
};
