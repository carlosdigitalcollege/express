const mysql = require('mysql');

const getDatabaseConnection = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: 'store',
    });

    return connection;
}

module.exports = {
    getDatabaseConnection,
}
