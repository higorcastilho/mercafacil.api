import { run } from "../config/database";
import { UserModel, schema, User } from "../models/user";
import { Document, model, ObjectId } from 'mongoose';

export async function createUsers() {
    await run();
    const macapa = new UserModel({
        username: 'macapa',
        identifier: 'http://localhost:6001',
        password: '123456'
    });
    await macapa.save();
    const varejao = new UserModel({
        username: 'varejao',
        identifier: 'http://localhost:6002',
        password: '123456'
    });
    await varejao.save();
}

export async function getUserByName(username: string): Promise<Document<any, any, User> & User & { _id: ObjectId; } | null> {
    await run();
    console.log(username)
    const users = model("User", schema);
    const user = await users.findOne({ 'username': username }).exec();
    return user;
}