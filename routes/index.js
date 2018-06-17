var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController')
const productController = require('../controllers/productController')


// router.get('/', homeController.home);
//router.put('/updated', homeController.update);

router.get('/', homeController.home)
router.get('/agregar', productController.home)
router.post('/add', productController.addNew)
router.get('/auth', productController.auth)
router.post('/authenticate', productController.authenticate)


module.exports = router;
