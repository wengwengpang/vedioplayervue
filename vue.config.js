const path = require('path')

module.exports={
  chainWebpack:(config) =>{
    config.resolve.alias.set("styles", path.join(__dirname,"./src/assets/styles"))
    .set("img",path.join(__dirname,"./src/assets/img"))
  },
  devServer: {
    proxy: {
     "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "api":"/mock"
        }
      }
    }
  }
}
