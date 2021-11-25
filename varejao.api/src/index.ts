import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ['*']
}));

app.use(express.json());

app.listen(4000, () => {
    console.log("Running on port 4000");
})
