require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.use(bodyParser.json())
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// 构建测试数据
var router = express.Router()
var recommendData = require('../data/welcome.json')
var productTypesData = require('../data/product_types.json')
var bannersData = require('../data/banner.json')
var productsData = require('../data/products.json')
var productsSubCategoryData = require('../data/products_by_category.json')
var productData = require('../data/product.json')
var locationData = require('../data/provinces.json')
var addressData = require('../data/addresses.json')
var groupData = require('../data/group.json')

router.get('/welcome', function (req, res) {
  res.json(recommendData)
})
router.get('/banners', function(req, res) {
  res.json(bannersData)
})
router.get('/product_types', function(req, res) {
  res.json(productTypesData)
})
router.get('/types/sub/:subCategoryId', function(req, res) {
  res.json(productsSubCategoryData)
})
router.get('/products/:productId', function(req, res) {
  res.json(productData)
})
router.get('/products/:productId/fav', function(req, res) {
  res.json({
    is_success: true
  })
})
router.get('/regions/provinces', function(req, res) {
  res.json(
    locationData.provinces
  )
})
router.get('/regions/cities/:cityId', function(req, res) {
  res.json(locationData.cities)
})
router.get('/regions/districts/:districtId', function(req, res) {
  res.json(locationData.districts)
})

router.post('/products/search', function(req, res) {
  if (req.body.search === '东北') {
    res.json(productsData.first)
  } else {
    res.json([])
  }
})

router.post('/addresses', function(req, res) {
  res.json({
    is_success: true,
    address_id: 5
  })
})

router.post('/addresses/update/:addressId', function(req, res) {
  res.json({
    is_success: true
  })
})

router.get('/addresses', function(req, res) {
  res.json(addressData)
})

router.get('/addresses/default/:addressId', function(req, res) {
  res.json({
    is_success: true
  })
})

router.get('/addresses/delete/:addressId', function(req, res) {
  res.json({
    is_success: true
  })
})
router.get('/groups/:groupId', function(req, res) {
  res.json(groupData)
})

app.use('/mobile/wx', router)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})