//docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=macapadb -e MYSQL_USER=macapa -e MYSQL_PASSWORD=123456 mysql
// CREATE table contact (
// 	id serial PRIMARY KEY,
// 	name VARCHAR ( 200 ) NOT NULL,
// 	cellphone VARCHAR ( 20 ) NOT NULL
// );  

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:123456@localhost:3306/macapadb");
    console.log('connected to MySQL');
    global.connection = connection;
    return connection;
}

module.exports = {
    connect
}