var express = require('express');
const productModel = require('../models/product');
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

router.get('/products/new', (req, res) => {
  res.render('products/form');
})

router.get('/products', (req, res) => {
  productModel.getAll((result) => {
    console.log(result)
    res.render('products/list', { products: result });
  })
})

router.get('/products/ssr', (req, res) => {
  productModel.getAll((result) => {
    console.log(result)
    res.render('products/ssrlist', { products: result });
  })
})

module.exports = router;
