import { connect, connection, ConnectOptions } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// const mongoURI: string = process.env.MONGO_CONNECTION;

run().catch(err => console.log(err));

export async function run(): Promise<void> {
  const dbHost = process.env.DBHOST || "mongodb://root:123456@localhost:27017";

  if (connection.readyState == 0) {
      await connect(dbHost, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
  }
}