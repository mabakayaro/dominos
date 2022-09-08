const path = require('path');
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  pluginOptions: {},
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@/*': path.resolve(__dirname, 'src/*'),
        '@/': path.resolve(__dirname, 'src/'),
        '@/config': path.resolve(__dirname, 'src/config')
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:1335',
        ws: true,
        changeOrigin: true
      },
      '^/data': {
        target: 'http://localhost:1335'
      }
    },
    host: 'localhost',
  },
};
