var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('doc')
})

app.post('/auth', (req, res) => {
  const { email, password } = req.body
  if (email === 'carlos@email.com' && password === '1234') {
    res.json({ message: 'Usuário autorizado', token: '#!@KJ#LK@J#L!J@L#KJ!@LKLK#'})
  } else {
    res.status(401);
    res.json({ message: 'Usuário não autorizado'})
  }
})

module.exports = router;
