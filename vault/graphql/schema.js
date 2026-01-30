export const typeDefs = `#graphql
  type QueryEvent {
    idx: Int!
    timestamp: Int!
  }

  type Query {
    queries(limit: Int): [QueryEvent]
  }

  type Mutation {
    createQuery: Boolean
  }
`