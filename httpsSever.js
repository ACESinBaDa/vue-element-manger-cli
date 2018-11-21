var express = require('express')
var http = require('http')
var https = require('https')
var fs = require('fs')
var proxy = require('http-proxy-middleware')
var history = require('connect-history-api-fallback')
var compression = require('compression')

const httpsOption = {
  key: fs.readFileSync('./public/cert/cert-1519486227644_chat.sinbada.top.key'),
  cert: fs.readFileSync('./public/cert/cert-1519486227644_chat.sinbada.top.crt')
}

var app = express()

var port = 80
var ports = 443

// 生产环境的端口号
http.createServer(app).listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
https.createServer(httpsOption, app).listen(ports, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at https://localhost:' + ports + '\n')
})
// module.exports = app.listen(port, function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Listening at http://localhost:' + port + '\n')
// })

app.use(compression())
app.use(
  '/api', proxy({
    target: 'http://106.13.1.45:8089',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  })
)
app.use(
  history({
    index: './index.html'
  })
)
app.use(express.static('./dist'))

app.all('*', function (req, res, next) {
  console.log(req.hostname)
  if (req.protocol === 'http') {
    res.redirect('https://chat.sinbada.top' + req.originalUrl)
  }
  next()
})
