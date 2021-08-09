const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  // I have hash set to true for cache busting
  // I’ve specified the location of my template
  // I’ve given the name of the HTML file to output inside the dist folder
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  //   Cleaning up the dist folder

  output: {
    clean: true,
  },
}
