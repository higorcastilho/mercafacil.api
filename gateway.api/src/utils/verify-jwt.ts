import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
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