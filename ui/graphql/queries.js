import { gql } from "@apollo/client";

export const GET_QUERIES = gql`
  query GetQueries($limit: Int!) {
    queries(limit: $limit) {
      idx
      timestamp
    }
  }
`;
