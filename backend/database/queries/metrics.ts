export interface Query_OBJ {
    [key: string]: string,
}

export const METRIC_QUERIES: Query_OBJ = {
    GET_ALL_METRICS:
    `
        SELECT * FROM table;
    `,

    // other queries
}