import { Client } from "pg";
import { METRIC_QUERIES } from "../database/queries/metrics_queries.ts"

export const getAllMetricData = async(pgClient: Client) => {
    try {
        const query = METRIC_QUERIES.GET_ALL_METRICS;
        
        const result = pgClient.query(query);

        return result;
    } catch (err) {
        console.error("Rip service");
        throw err;
    }
}