const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/price/:userId/:productName', productsController.getProductPrice);

module.exports = router;