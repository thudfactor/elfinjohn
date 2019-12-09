class TailwindExtractor {
	static extract(content) {
		return content.match(/[\w-/:]+(?<!:)/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html','content/**/*.md'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }], 
      fontFace: false,
      whitelist: ['aspect-ratio-4/3', 'class2']
    }),    
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: ['>1%']
    }),    
  ]
}