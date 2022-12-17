const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/auth', userController.auth)
router.post('/users', userController.create)
router.post('/products', productController.create)

module.exports = router;
