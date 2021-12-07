const db = require("./db");

async function insert(name, cellphone) {
    const conn = await db.connect();
    await conn.query('INSERT INTO contact(name, cellphone) VALUES (?,?);', [name, cellphone]);
    await conn.end();
}

async function get() {
    const conn = await db.connect();
    const [rows, fields] = await conn.query('SELECT * FROM `contact`;')
    await conn.end();
    return rows;
}

module.exports = {
    insert,
    get
}



