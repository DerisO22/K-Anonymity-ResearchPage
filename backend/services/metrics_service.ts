import { METRIC_QUERIES } from "../database/queries/metrics_queries.ts"

export const getAllMetricData = async(pgClient) => {
    try {
        const query = METRIC_QUERIES.GET_ALL_METRICS;
        // need to pass the pgclient
        // const result = await pgclient.query(query);
        const result = pgClient.query(query);

        return result;
    } catch (err) {
        console.error("Rip service");
        throw err;
    }
}