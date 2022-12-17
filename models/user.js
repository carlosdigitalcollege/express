const { getDatabaseConnection, executeQuery } = require("../utils/database");

const add = (user, onSuccess) => {
    const { name, email, password } = user;

    executeQuery(
        `
            INSERT INTO user (name, email, password)
            VALUES ('${name}', '${email}', '${password}');
        `,
        onSuccess
    )
}

const findUserByEmailAndPassword = (email, password, onSuccess) => {
    executeQuery(
        `
            SELECT name, email FROM user
            WHERE email = '${email}'
            AND password = '${password}';
        `,
        onSuccess
    )
}


module.exports = {
    add,
    findUserByEmailAndPassword,
}