import { NextFunction, Request, Response } from "express";
import { authenticate } from "../service/user-service";

export async function auth(req: Request, res: Response, next: NextFunction) {
    const accessToken = await authenticate(req.body.username, req.body.password);
    res.status(200).send(accessToken);
}