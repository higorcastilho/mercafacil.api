import { connect, Schema, model, connection } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.MONGO_CONNECTION;

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  identifier: string;
  password?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  name: { type: String, required: true },
  identifier: { type: String, required: true },
  password: String
});

// 3. Create a Model.
const UserModel = model<User>('User', schema);

run().catch(err => console.log(err));

export async function run(): Promise<void> {
  // 4. Connect to MongoDB

  if (connection.readyState == 0) {
      await connect(mongoURI);
  }
  
  const doc = new UserModel({
    name: 'macapa',
    identifier: 'http://localhost:6001',
    password: '123456'
  });
  await doc.save();
}