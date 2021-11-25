declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_CONNECTION: string;
            DATABASE_NAME: string;
            PORT: string
        }
    }
}
export {}