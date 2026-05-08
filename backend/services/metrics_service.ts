import { Client } from "pg";
import { METRIC_QUERIES } from "../database/queries/metrics_queries.js"

export const getAllMetricData = async(pgClient: Client | undefined) => {
    if (!pgClient) {
        throw new Error("Database client not found on request");
    }

    try {
        const query = METRIC_QUERIES.GET_ALL_METRICS;
        
        const result = pgClient.query(query);

        return result;
    } catch (err) {
        console.error("Rip service");
        throw err;
    }
}