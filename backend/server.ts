import express from 'express';
import type { Request, Response, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

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

// try {
//     await intializatDatabase(client);
// } catch (err) {
//     console.error("Failed to initialize database schema: ", err);
// }

/**
 *  Routing
// **/
// app.use((req, res, next) => {
//     req.pgClient = client;
//     next();
// })

app.use('api//metrics', metricsRouter);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});