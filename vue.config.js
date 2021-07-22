module.exports = {
    devServer: {
        proxy: { 
          '/api': {
            target: 'http://library.justinxiao.cn/', 
            changOrigin: true,
            pathRewrite: {
              '^/api': '/api' 
            }
          },
        },
        port: 3000,
        disableHostCheck: true,
      },
  };