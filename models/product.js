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
                '${price}',
           );
        `,
        onSuccess
    )
}


module.exports = {
    add,
}