module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        '2xl': '1800px'
      },
      colors: {
        'translucent-white': 'rgba(255,255,255,.8)',
        'translucent-black': 'rgba(0,0,0,.8)'
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      }
    },
    fluidContainer: {
      'default': {
        maxWidth: '800px',
        responsiveMaxWidth: {
          'lg': '1150px'
        },
        padding: `${30/16}rem`,
        responsivePadding: {
          'xl': '0'
        }
      }, 
      'sm': {
        maxWidth: '938px',
        padding: `${30/16}rem`,
        responsivePadding: {
          'lg':'0'
        }
      }    
    }
  },
  variants: {
    borderWidth:['responsive','first','last'],
    backgroundColor:['responsive','hover','focus','odd','even'],
    fluidContaner: ['responsive']
  },
  corePlugins: {
    fontFamily: false
  },  
  plugins: [
    require('tailwindcss-fluid-container')(),
    require("tailwindcss-responsive-embed")(),
    require("tailwindcss-aspect-ratio")({
      ratios: {
        square: [1, 1],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9]
      }
    }),  
  ]
}
