const db = require("./db");

async function insert(name, cellphone) {
    const conn = await db.connect();
    const sql = 'INSERT INTO contact(name, cellphone) VALUES (?,?);';
    const values = [name, cellphone];
    return await conn.query(sql, values);
}

module.exports = {
    insert
}



