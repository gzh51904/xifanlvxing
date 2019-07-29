const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/xifan', { 
    target: 'https://m.tourscool.com',
    pathRewrite: {
      "^/xifan": "/"
    }
  }))
}