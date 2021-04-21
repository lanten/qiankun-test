const path = require('path')
const { name } = require('./package')
module.exports = {
  devServer: {
    port: 18082,
    disableHostCheck: true,
    // publicPath: 'http://10.110.5.144:18082/',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    // entry: {
    //   app: path.resolve(__dirname, './src/main.js'),
    // },

    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
}
