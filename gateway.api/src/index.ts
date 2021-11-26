import express from "express";
import httpProxy from "express-http-proxy";
import dotenv from "dotenv";
import { verifyJWT } from "./utils/verify-jwt";
import jwt from "jsonwebtoken";
import { auth } from "./api/user-controller";

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use("/", (req, res) => {
//     res.json({ message: "It's ok!" })
// })

// app.get("/contacts", verifyJWT, (req, res, next) => {
//     console.log("Returned all contacts");
//     console.log((req as any).userId)
//     console.log((req as any).identifier)
//     res.json([ {id: 1, name: "Luiz"} ]);
// })

app.post("/auth", auth);

// app.post("/proxy", verifyJWT, (req, res) => {
//     res.json({teste: "oi"})
// });

// app.post("/proxy", verifyJWT, httpProxy('http://localhost:5679/proxy'));

function selectProxyHost(req: any) {
    const uri = (req as any).identifier;
    const endpoint = req.originalUrl;
    return `${uri}${endpoint}`;
}

app.post("/contacts", verifyJWT, httpProxy(selectProxyHost));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});