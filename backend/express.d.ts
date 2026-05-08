import { Client } from "pg";

declare global {
    namespace Express {
        interface Request {
            pgClient?: Client
        }
    }
}