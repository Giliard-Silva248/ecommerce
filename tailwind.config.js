/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}",  './node_modules/flyonui/dist/js/*.js'],
  theme: {
    extend: {
      colors: {
        cor1: '#0D090A',
        cor2: '#361F27',
        cor3: '#521945',
        cor4: '#912F56',
        cor5: '#EAF2EF',
      },
      backgroundImage: {
        'banner': "url('/src/assets/img/banner.jpg')",
        'loginBg': "url('/src/assets/img/loginImg.jpg')",
        'cadastroBg': "url('/src/assets/img/cadastroImg.jpg')",

      },
    },
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'),
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
