const db = require("./db");

async function insert(name, cellphone) {
    const client = await db.connect();
    const query = 'INSERT INTO contact(name, cellphone) VALUES ($1, $2);';
    const values = [name, cellphone];
    const res = await client.query(query, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
    });
    // await client.end();
}

module.exports = {
    insert
}



