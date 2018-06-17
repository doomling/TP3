self = {}
const productService = require('../services/productService');
const products = productService.getProducts;
/* GET home page. */
self.home = function(req, res) {
  console.log(products)
  res.render('index', {
    title: 'holi',
    product: products,
  })
}

module.exports = self
