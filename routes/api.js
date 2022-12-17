const express = require('express');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const userModel = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('doc')
})

router.post('/auth', userController.auth)
router.post('/users', userController.create)

module.exports = router;
