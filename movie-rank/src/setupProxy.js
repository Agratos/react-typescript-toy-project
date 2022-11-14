// webpack devServer 에서 사용할 것
module.exports = {
    '/api/movie': {
        target: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice',
        changeOrigin: true,
        pathRewrite: {
          '^/api/movie': '',
        }
    },
}