var path = require('path'),
  ROOT_PATH = __dirname,
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(ROOT_PATH,'client/src/main.jsx'),
  output:{
    path:path.resolve(ROOT_PATH,'client/build/js/'),
    filename: 'bundle.[hash].js',
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
  },
  plugins:[new HtmlWebpackPlugin({
    title:'xls Drop',
    filename:'client/build/index.html',
    template:'default_index.html'
  })]
};