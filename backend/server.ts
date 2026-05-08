import express from 'express';
import type { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { createClient, connectToDatabase } from './database/config.ts';
const client = createClient();
dotenv.config();

/**
 *  Routers
**/
import metricsRouter from './routes/metrics.ts';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}))

const setUpApp = async () => {
    try {
        await connectToDatabase(client);
    } catch (err) {
        console.error("Failed to initialize database schema: ", err);
    }

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
}

setUpApp();