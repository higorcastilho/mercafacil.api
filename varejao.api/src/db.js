
//docker run --name postgres -e POSTGRES_PASSWORD=123456 -d postgres
// entrar na cli do container do postgres => docker exec -it postgres /bin/bash
//entrar na cli do postgres => psql --user postgres
// criar base de dados varejaodb => create database varejaodb;
// dar privilegios ao usuario postgres => grant all privileges on database verejaodb to postgres;
// conectar com a database recem criada => \c verejaodb


//requisitos
// CREATE table contact (
// 	id serial PRIMARY KEY,
// 	nome VARCHAR ( 100 ) NOT NULL,
// 	celular VARCHAR ( 13 ) NOT NULL
// );

const { Client } = require("pg");

const dbCondig = {
    user: process.env.POSTGRES_USER,
    host: process.env.DBHOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DBPORT,
}

async function connect() {    
    const client = new Client(dbCondig);
    await client.connect();
    return client;
}

module.exports = {
    connect
}