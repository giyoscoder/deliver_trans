module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkMain: '#006790',
        lightMain: '#028BC1'
      },
      borderColor:{
        'navInput': 'rgba(255, 255, 255, 0.10)'
      },
      backgroundImage: {
        'showcaseImg': "url('/src/Assets/images/showcase.png')",
        'showcaseLinear': "linear-gradient(270deg, #006790 0%, rgba(0, 103, 144, 0.00) 100%)",
        'one': "url('/src/Assets/images/one.png')",
        'two': "url('/src/Assets/images/two.png')",
        'three': "url('/src/Assets/images/three.png')",
        'four': "url('/src/Assets/images/four.png')",
        'five': "url('/src/Assets/images/five.png')",
        'modal': 'linear-gradient(rgba(0, 103, 144, 0.50), rgba(0, 103, 144, 0.50))',
        'modalBg': "url('/src/Assets/images/modalbg.png')",
        'loadingProducts': "url('/src/Assets/images/loadingPage.png')",
        'loadingProducts2': "url('/src/Assets/images/loadingPage2.png')",
        'loadingPageLinear': "linear-gradient(270deg, rgba(0, 103, 144, 0.00) 0%, #006790 100%)",

      }
    },
  },
  plugins: [],
};
