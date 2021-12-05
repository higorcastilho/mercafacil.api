const db = require("./db");

function insert(name, cellphone) {
    const conn = db.conn;
    console.log(name, cellphone)
    conn.query('INSERT INTO contact(name, cellphone) VALUES (?,?);',
        [name, cellphone],
        function(err, results, fields) {
            console.log(results);
            console.log(fields);
            conn.end();
        }
    
    );
}

module.exports = {
    insert
}



