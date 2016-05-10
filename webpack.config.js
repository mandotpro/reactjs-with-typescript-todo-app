var webpack = require('webpack');  
module.exports = {  
  entry: './app/main.tsx',
  output: {
    filename: 'dist/bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx$/, loader: 'ts-loader' }
    ]
  }
}