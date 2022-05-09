module.exports = {
  purge: ['./public/index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      'gray':'#9ca3af',
      'primary': '#fdba74',
      'primary-dark':'#fb923c',
      'pista':'#d1e3ca',
      'pista-dark':'#AFD89F'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
