const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    open: true,
    https: false,
    port: 8080,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'https://www.markerhub.com/vueadmin-java',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_API]: ''
        }
      }
    }
  },
  lintOnSave: true
})
