const express = require("express");
const dotenv = require("dotenv");
const { insert } = require("./repository")

dotenv.config();

const app = express();
app.use(express.json());

app.post("/contacts", async (req, res) => {
    console.log(req.body.nome);
    console.log(req.body.celular);

    const contact = {
        name: req.body.nome,
        cellphone: req.body.celular
    }

    await insert(contact);

    res.json({ nome: req.body.nome, celular: req.body.celular, host: "host macapa" });

});

app.listen(6001, () => {
    console.log("Listening on port 6001");
})
