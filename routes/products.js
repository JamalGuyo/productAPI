const express = require('express'),
router = express();
// import products controller
const pController = require('../controllers/products');
// ROUTES
router.route('/')
.get(pController.getProducts)
.post(pController.createProduct)

router.route('/:productID')
.get(pController.getProduct)
.put(pController.updateProduct)
.delete(pController.deleteProduct)

// EXPORT ROUTES
module.exports = router;