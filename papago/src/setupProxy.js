// webpack devServer 에서 사용할 것
module.exports = {
    '/naverapi': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        pathRewrite: {
          '^/naverapi': 'https://openapi.naver.com',
        }
    },

    // '/api/test2': {
    //     target: 'url',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api/test2': '',
    //     }
    // },

}