const { getDatabaseConnection } = require("../utils/database");

const add = (user, onSuccess) => {
    const { name, email, password } = user;

    const connection = getDatabaseConnection();

    connection.connect(function (err) {
        if (err) throw err;
        connection.query(`
            INSERT INTO user (name, email, password)
            VALUES ('${name}', '${email}', '${password}');
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