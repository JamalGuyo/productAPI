const express = require('express'),
router = express();
// import products controller
const pController = require('../controllers/products');
// ROUTES
router.route('/')
.get(pController.getProducts)
.post(pController.createProduct)

// EXPORT ROUTES
module.exports = router;