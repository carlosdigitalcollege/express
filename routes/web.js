var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
})

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
})

router.get('/users/new', (req, res) => {
  res.render('users/form');
})

module.exports = router;
