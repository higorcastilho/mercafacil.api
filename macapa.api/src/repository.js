const db = require("./db");

async function insert(contact) {
    const conn = await db.connect();
    const sql = 'INSERT INTO contact(name, cellphone) VALUES (?,?);';
    const values = [contact.name, contact.cellphone];
    return await conn.query(sql, values);
}

module.exports = {
    insert
}



