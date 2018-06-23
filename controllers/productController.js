let uploader = {}
const auth = require('../services/authService')
const product = require('../services/productService')
let isAuthenticated = auth.user.status

/* render home page. */

uploader.home = function(req, res) {
  isAuthenticated = auth.user.status
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
          auth.updateStatus(isAuthenticated)
          res.sendStatus(302)
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(400)
      }
    }

uploader.addNew = function(req, res) {
  const body = req.body;
    if (body.name && body.url && body.price) {
      product.addProduct(body)
      return res.sendStatus(200)
    } else {
      return res.sendStatus(400)
    }
}

uploader.authSuccesful = function() {
  return isAuthenticated
}

module.exports = uploader;
