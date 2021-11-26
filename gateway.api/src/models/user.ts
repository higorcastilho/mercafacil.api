import { Schema, model } from 'mongoose';

export interface User {
    username: string;
    identifier: string;
    password: string;
}

export const schema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    identifier: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const UserModel = model<User>('User', schema);