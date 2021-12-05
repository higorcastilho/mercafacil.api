//docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=macapadb -e MYSQL_USER=macapa -e MYSQL_PASSWORD=123456 mysql
// CREATE table contact (
// 	id serial PRIMARY KEY,
// 	name VARCHAR ( 200 ) NOT NULL,
// 	cellphone VARCHAR ( 20 ) NOT NULL
// );  
const mysql = require("mysql2");
const { env } = require("process");

const dbCondig = {
    host: process.env.DBHOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.DBPORT,
    connectTimeout: parseInt(process.env.CONNECT_TIMEOUT)
}

const conn = new mysql.createConnection(dbCondig);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
        //    queryDatabase();
    }
});

module.exports = {
    conn
}