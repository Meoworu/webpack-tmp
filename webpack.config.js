const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
      pageOne:'./app/pageOne/js/main.js',
      pageTwo:'./app/pageTwo/js/main.js',
      pageThree:'./app/pageThree/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js',
  },
  plugins:[
        new HtmlWebpackPlugin({
            template:'./app/pageOne/index.html',
            filename:'pageOne.html'
        }),
        new HtmlWebpackPlugin({
            template:'./app/pageTwo/index.html',
            filename:'pageTwo.html',
            chunks:['pageTwo']
        }),
        new HtmlWebpackPlugin({
            template:'./app/pageThree/index.html',
            filename:'pageThree.html',
            chunks:['pageThree']
        })
  ]
};