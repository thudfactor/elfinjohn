module.exports = {    
  plugins: [         
    require('tailwindcss'),
    require('autoprefixer')({
      overrideBrowserslist: ['>1%']
    }),    
  ]
}