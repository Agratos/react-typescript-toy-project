// webpack devServer 에서 사용할 것
module.exports = {
    '/api/test': {
        target: 'url',
        changeOrigin: true,
        pathRewrite: {
          '^/api/test': '',
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