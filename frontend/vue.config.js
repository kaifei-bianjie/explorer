module.exports = {
    devServer: {
        proxy: {
          '/api':{
            target:'http://192.168.150.118:8080',
            secure:false,
          }
        }
    }
}