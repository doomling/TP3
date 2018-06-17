let uploader = {}
const auth = require('../services/authService')
const product = require('../services/productService')

/* render home page. */

let isAuthenticated = false;

uploader.home = function(req, res) {
  if (isAuthenticated) {
    res.render('agregar')
  }
  else {
    res.redirect('/auth')
  }
}

uploader.auth = function(req, res) {
  res.render('auth')
}

uploader.authenticate = function(req, res) {
  const body = req.body
    if (body.username && body.password) {
      isAuthenticated = auth.authenticate(body);
      if (isAuthenticated == true) {
        res.sendStatus(302)
      }
    } else {
    return res.sendStatus(400)
  }
}

uploader.addNew = function(req, res) {
  const body = req.body;
  console.log(body)
  if (body.name && body.url && body.price) {
    product.addProduct(body)
  } else {
    return res.sendStatus(400)
  }
}

module.exports = uploader;
