import { getQueries } from "./db.js";

export const resolvers = {
    Query: {
        queries: (_, { limit }) => getQueries(limit)
    }
};