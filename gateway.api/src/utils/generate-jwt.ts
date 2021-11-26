import jwt from "jsonwebtoken";

export function generateJwtToken(identifier: string) {
    const jwtToken = jwt.sign({ identifier }, "shhhhhh", {
        expiresIn: 300000
    });
    return jwtToken;
}