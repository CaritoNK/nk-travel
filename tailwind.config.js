/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bali' : "url('https://i.postimg.cc/52m25NHm/bali.jpg')",
        'chicago' : "url('https://i.postimg.cc/nLRV5RGj/chicago.jpg')",
        'europe' : "url('https://i.postimg.cc/bNxy8NRj/europe.jpg')",
        'iceland' : "url('https://i.postimg.cc/jj5tz6Ys/iceland.jpg')",
        'los_angeles' : "url('https://i.postimg.cc/nhTnjR5R/LA.jpg')",
        'miami' : "url('https://i.postimg.cc/fyXwVwnm/miami.jpg')",
        'new_york' : "url('https://i.postimg.cc/5tNNsdLW/new-york.jpg')",
        'norway' : "url('https://i.postimg.cc/mDPZGYmd/norway.jpg')",
        'sanFrancisco' : "url('https://i.postimg.cc/sxprVw7J/san-Francisco.jpg')",
        'sanFranciscoDesktop' : "url('https://i.postimg.cc/SR04Fw2s/san-Francisco-Desktop.jpg')",
        'seattle' : "url('https://i.postimg.cc/VsbsGFrv/seattle.jpg')",
        'switzerland' : "url('https://i.postimg.cc/13y9zhWV/switzerland.jpg')",
        'sydney' : "url('https://i.postimg.cc/Kz3bWZYw/sydney.jpg')",
        'yosemite' : "url('https://i.postimg.cc/s2NyKB35/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
