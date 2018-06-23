self = {}
const productService = require('../services/productService');
const authService = require('../services/authService');
const products = productService.getProducts;

/* GET home page. */

self.logout = function (req, res) {
  let data = req.body
  console.log(data)
  if (data.login == 'false') {
    authService.updateStatus(false)
  }
}

self.home = function(req, res) {
  let isAuthenticated = authService.user.status

  let status = {
    status: isAuthenticated,
    text: 'logout'
  }

  if (status.status == true) {
    status.text = 'logout'
  } else {
    status.text = 'login'
  }

  res.render('index', {
    title: 'Catálogo',
    product: products,
    status: status,
  })
}

module.exports = self
