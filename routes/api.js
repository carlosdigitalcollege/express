const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('doc')
})

router.post('/auth', userController.auth)
router.post('/users', userController.create)
router.post('/products', productController.create)

module.exports = router;
