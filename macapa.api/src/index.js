const express = require("express");

const app = express();
app.use(express.json());

app.post("/contacts", (req, res) => {
    console.log(req.body.nome);
    console.log(req.body.celular);

    res.json({ nome: req.body.nome, celular: req.body.celular, host: "host macapa" });

});

app.listen(6001, () => {
    console.log("Listening on port 6001");
})
