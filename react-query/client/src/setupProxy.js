// webpack devServer 에서 사용할 것
module.exports = {
    '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
    },

    '/api/test2': {
        target: 'url',
        changeOrigin: true,
        pathRewrite: {
          '^/api/test2': '',
        }
    },
}