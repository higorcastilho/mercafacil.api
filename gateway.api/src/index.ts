import express, { NextFunction, raw, Request, Response } from "express";
import jwt from "jsonwebtoken";
import httpProxy from "express-http-proxy";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use("/", (req, res) => {
//     res.json({ message: "It's ok!" })
// })

let pedinte = "";

function verifyJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    const rawToken = token?.split(" ")[1];

    if (!rawToken) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(rawToken.toString(), "shhhhhh", function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Failed to authenticate token" });
        
        // se tudo estiver ok, salva no request para uso posterior
        (req as any).userId = decoded!.id;
        (req as any).identifier = decoded!.identifier;
        // console.log(req.userId)

        next();
    });
}

app.get("/contacts", verifyJWT, (req, res, next) => {
    console.log("Returned all contacts");
    console.log((req as any).userId)
    console.log((req as any).identifier)
    res.json([ {id: 1, name: "Luiz"} ]);
})


app.post("/auth", (req, res, next) => {
    if (req.body.user === 'macapa' && req.body.password === 'any_password' ) {
        const id = 1;
        const identifier = 'http://localhost:2452';
        const token = jwt.sign({ id, identifier }, "shhhhhh", {
            expiresIn: 300000
        });
        return res.json({ auth: true, token: token });
    }

    if (req.body.user === 'varejao' && req.body.password === 'any_password' ) {
        const id = 1;
        const identifier = 'http://localhost:1888';
        const token = jwt.sign({ id, identifier }, "shhhhhh", {
            expiresIn: 300000
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: "Login failed." });
})

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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});