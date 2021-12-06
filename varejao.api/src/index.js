const express = require("express");
const dotenv = require("dotenv");
const { post } = require("./service");
const db = require("./db");

dotenv.config();

const app = express();


    app.use(express.json());
    app.post("/contacts", (req, res) => {
        try {
            const { nome, celular } = req.body;
        
            post(nome, celular);
        
            res.status(200).json({saved: true});
    
        }
        catch(error) {
            console.log(error);
        }
    
    });
    
    app.listen(6002, () => {
        console.log("Listening on port 6002");
    })


