/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cor1: '#0D090A',
        cor2: '#361F27',
        cor3: '#521945',
        cor4: '#912F56',
        cor5: '#EAF2EF',
        'scrollbar-bg': '#521945',
        'scrollbar-thumb': '#521945',
        'scrollbar-thumb-hover': '#521945',
      },
      backgroundImage: {
        'banner': "url('/src/assets/img/banner.jpg')"
      },
      borderRadius: {
        'scrollbar': '6px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
        '.scrollbar-firefox': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#888 #f1f1f1',
        },
      });
    },
  ],
}
