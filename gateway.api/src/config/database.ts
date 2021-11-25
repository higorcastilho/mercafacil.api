import mongodb, { MongoClient } from "mongodb";

const MongoCLient = mongodb.MongoClient;
let client: MongoClient | null = null;

export async function connect() {
    if (!client)
        client = new MongoCLient(process.env.MONGO_CONNECTION);

        await client.connect();
        return client.db(process.env.DATABASE_NAME);
}

export async function disconnect() {
    if (!client) return true;
    await client.close();
    client = null;
    return true;
}