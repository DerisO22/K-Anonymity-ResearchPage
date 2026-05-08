import express from 'express';
import type { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});