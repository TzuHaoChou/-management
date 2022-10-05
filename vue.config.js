const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:'http://119.45.133.128:8098',
        changeOrigin:true,
        pathRewrite:{
          "^/api":''
        }
      },
    },
  },
})
