const { getDatabaseConnection } = require('../utils/database');

const table = 'user';

const add = (user, onSuccess) => {
    const connection = getDatabaseConnection()
    const { name, email, password } = user;
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(`
            INSERT INTO ${table} (name, email, password)
            VALUES ('${name}', '${email}', '${password}')
        `, function (err, result) {
            if (err) throw err;
            connection.end();
            onSuccess(result);
        });
    });
}

module.exports = {
    add,
};