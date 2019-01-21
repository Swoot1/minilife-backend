const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '172.18.0.2',
    user: 'minilife-web-user',
    password: 'minilife-web-user',
    database: 'minilife',
    port: 3306
});

connection.connect();

module.exports = connection;