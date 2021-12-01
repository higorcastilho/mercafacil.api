const express = require("express");
const dotenv = require("dotenv");
const { post } = require("./service");

dotenv.config();

const app = express();
app.use(express.json());

app.post("/contacts", async (req, res) => {

    const { nome, celular } = req.body;

    await post(nome, celular);

    res.status(200).json({});

});

app.listen(6001, () => {
    console.log("Listening on port 6001");
})
