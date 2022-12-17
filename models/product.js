const { executeQuery } = require("../utils/database")


const add = (product, onSuccess) => {
    const {
        name,
        description,
        sku,
        category,
        price,
    } = product;

    executeQuery(
        `
           INSERT INTO product (
                name,
                description,
                sku,
                category,
                price
            )
           VALUES (
                '${name}',
                '${description}',
                '${sku}',
                '${category}',
                '${price}'
           );
        `,
        onSuccess
    )
}


const getAll = (onSuccess) => {
    executeQuery(
        'SELECT name, sku FROM product',
        onSuccess
    )
}


module.exports = {
    add,
    getAll,
}
