import express from "express";
import httpProxy from "express-http-proxy";
import dotenv from "dotenv";
import { verifyJWT } from "./utils/verify-jwt";
import { auth } from "./api/user-controller";

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/auth", auth);

function selectProxyHost(req: any) {
    const uri = (req as any).identifier;
    const endpoint = req.originalUrl;
    return `${uri}${endpoint}`;
}

app.post("/contacts", verifyJWT, httpProxy(selectProxyHost));
app.get("/contacts", verifyJWT, httpProxy(selectProxyHost));

const PORT = process.env.PORT && parseInt(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});