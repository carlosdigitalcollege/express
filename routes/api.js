const express = require('express');
const userModel = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('doc')
})

router.post('/auth', (req, res) => {
  const { email, password } = req.body
  if (email === 'carlos@email.com' && password === '1234') {
    res.json({ message: 'Usuário autorizado', token: '#!@KJ#LK@J#L!J@L#KJ!@LKLK#'})
  } else {
    res.status(401);
    res.json({ message: 'Usuário não autorizado'})
  }
})

router.post('/users', (req, res) => {
  const { name, email, password } = req.body

  userModel.add(req.body, (result) => {
    res.end(JSON.stringify(result[0]));
  })
})

module.exports = router;
