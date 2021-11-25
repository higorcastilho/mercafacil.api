import dotenvsafe from "dotenv-safe";
dotenvsafe.config();

import { connect, disconnect } from "./database";

test("MongoDB connection", async () => {
    const connection = await connect();
    expect(connection).toBeTruthy();
});

test("MongoDB disconnection", async () => {
    const isDisconnected = await disconnect();
    expect(isDisconnected).toBeTruthy();
});