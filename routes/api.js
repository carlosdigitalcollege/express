const express = require('express');
const jwt = require('jsonwebtoken');
const { auth, create } = require('../controllers/userController');
const userModel = require('../models/user');

const router = express.Router();

router.post('/auth', auth)
router.post('/users', create)

module.exports = router;
