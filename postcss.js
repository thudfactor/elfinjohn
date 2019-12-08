class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import'), 
    require('tailwindcss'),    
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),    
  ]
}