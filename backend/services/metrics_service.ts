import { METRIC_QUERIES } from "../database/queries/metrics"

export const getAllMetricData = async() => {
    try {
        const query = METRIC_QUERIES.GET_ALL_METRICS;
        // need to pass the pgclient
        // const result = await pgclient.query(query);
        const result = 'hello'

        return result;
    } catch (err) {
        console.error("Rip service");
        throw err;
    }
}