import { seedUsers } from "../repository/user-repository";

async function seed() {
    await seedUsers();
}

seed();