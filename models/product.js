const { getDatabaseConnection } = require("../utils/database");

const add = (product, onSuccess) => {
    const { name, sku, category, price, description } = product;

    const connection = getDatabaseConnection();

    connection.connect(function (err) {
        if (err) throw err;
        connection.query(`
            INSERT INTO product (name, sku, category, price, description)
            VALUES ('${name}', '${sku}', '${category}', '${price}', '${description}');
        `, function (err, result) {
            if (err) throw err;
            connection.end();
            onSuccess(result)
        });
    });
}

module.exports = {
    add,
}
