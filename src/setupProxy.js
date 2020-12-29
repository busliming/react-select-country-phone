const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = (app) => {
//   app.use('/v1', createProxyMiddleware({
//     target: 'http://localhost:3001',
//     changeOrigin: true
//   }))
// }

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5060',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api': '', // axios 访问/api2 == target + /api
    }
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '', // axios 访问/api2 == target + /api
    }
  }));

  app.use('/yewu9', createProxyMiddleware({
    target: 'http://api.sportxxx14bl5.com/yewu9',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/yewu9': '', // axios 访问/api2 == target + /api
    }
  }));

};