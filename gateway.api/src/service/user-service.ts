import { User } from "../models/user";
import { getUserByName } from "../repository/user-repository";
import { generateJwtToken } from "../utils/generate-jwt";

export async function authenticate(username: string, password: string) {
    const user = await getUserByName(username);

    if (password == user?.password) {
        const identifier = user?.identifier;
        const token = generateJwtToken(identifier);
        return { auth: true, token: token };
    }
}