import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';

module.exports = function (app: { use: (arg0: RequestHandler) => void }) {
    app.use(
        createProxyMiddleware('/movie/api',{
            target: 'http://www.kobis.or.kr/',
            changeOrigin: true,
            pathRewrite: {
                '^/movie/api/' : ''
            }
        })
    )

    // app.use(
    //     createProxyMiddleware('/api', {
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //         // pathRewrite: {
    //         //     '^/api' : ''
    //         // }
    //     })
    // );

};
