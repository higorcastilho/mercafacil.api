import { connect, connection } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// const mongoURI: string = process.env.MONGO_CONNECTION;

run().catch(err => console.log(err));

export async function run(): Promise<void> {

  if (connection.readyState == 0) {
      await connect("mongodb://higor:123456@localhost:27017");
  }
}