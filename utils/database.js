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

const executeQuery = (query, onSuccess) => {
    const connection = getDatabaseConnection();

    connection.connect((err) => {
        if (err) throw err;
        connection.query(query, (err, result) => {
            if (err) throw err;
            connection.end();
            onSuccess(result);
        });
    });
}


module.exports = {
    getDatabaseConnection,
    executeQuery,
}
