const productModel = require('../models/product');

const create = (req, res) => {
  // TODO: Validação

  productModel.add(req.body, (result) => {
    res.end(JSON.stringify(result[0]));
  })
}

module.exports = {
    auth,
    create,
}
