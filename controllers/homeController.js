self = {}
const productService = require('../services/productService');
const authService = require('../services/authService');
const products = productService.getProducts;
let status = authService.authenticate;
/* GET home page. */
self.home = function(req, res) {
  console.log(products)

  if (status) {
    status = 'logout'
  } else {
    status = 'login'
  }
  res.render('index', {
    title: 'Catálogo',
    product: products,
    status: status,
  })
}

module.exports = self
