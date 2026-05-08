import express from 'express';
import type { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { createClient, connectToDatabase } from './database/config.js';

/**
 *  Routers
**/
import metricsRouter from './routes/metrics.js';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}))

const setUpApp = async () => {
    try {
        const client = createClient();
        console.log("Client created:", !!client);

        if (!client) {
            throw new Error("Failed to create database client. Check DATABASE_URL environment variable.");
        }

        await connectToDatabase(client);

        /**
         *  Routing
        **/
        app.use((req: Request, res: Response, next: NextFunction) => {
            req.pgClient = client;
            next();
        })

        app.use('/api/metrics', metricsRouter);

        app.listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to initialize database schema: ", err);
    }
}

setUpApp();