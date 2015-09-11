var path = require('path'),
  ROOT_PATH = __dirname;

module.exports = {
  entry: './client/src/main.js',
  output:{
    filename: './client/build/js/bundle.[hash].js',
    publicPath: './client/build/assets'
  },
  resolve:{
    extensions:['','.js','.jsx'],
    path: ROOT_PATH
  },
  module:{
    loaders:[
      {test:/\.jsx$/, include:path.resolve(ROOT_PATH,'client/src'), loader:'babel-loader'}
    ]
  }
}