var path = require('path'),
  ROOT_PATH = __dirname;

module.exports = {
  entry: path.resolve(ROOT_PATH,'client/src')+'/main.jsx',
  output:{
    filename: path.resolve(ROOT_PATH,'client/build/js')+'/bundle.[hash].js',
    publicPath: path.resolve(ROOT_PATH,'client/build/assets')
  },
  resolve:{
    extensions:['','.js','.jsx'],
    path: ROOT_PATH
  },
  module:{
    loaders:[
      {test:/\.jsx$/, include: path.resolve(ROOT_PATH,'client/src'), loader:'babel-loader'}
    ]
  }
};