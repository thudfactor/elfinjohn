module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    borderWidth:['responsive','first','last'],
    backgroundColor:['responsive','hover','focus','odd','even']
  },
  corePlugins: {
    fontFamily: false
  },
  plugins: [
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
