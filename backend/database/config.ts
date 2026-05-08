import dotenv from 'dotenv';
import pg from 'pg';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dbPath = path.resolve(__dirname, "schema.sql")

const { Client } = pg;

export async function connectToDatabase(client: pg.Client | undefined) {
    if (!client) {
        console.error("Database client is undefined. Cannot connect.");
        return;
    }
    
    try {
        await client.connect();
        console.log("Connected to database successfully");

        const sqlScript = fs.readFileSync(dbPath, 'utf8');
        await client.query(sqlScript);

        console.log("Database schema intialized successfully");
    } catch (err) {
        console.error("Error connecting to database");
        throw err;
    }
}

export const createClient = () => {
    if(process.env.DATABASE_URL) {
        return new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        })
    }

    console.error("No database URL found in environment variables");
    return undefined;
}