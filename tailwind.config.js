module.exports = {
  purge: ['./public/index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      'gray':'#9ca3af',
      'gray-dark':'#6b7280',
      'white': '#ffffff',
      'light':'#ffedd5',
      'primary': '#fdba74',
      'primary-dark':'#fb923c',
      'pista':'#d1e3ca',
      'pista-dark':'#AFD89F',
      'red':'#f87171',
      'red-dark':'#ef4444'
    },
    fontFamily:{
      oleo:['Oleo Script Swash Caps', 'cursive']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
