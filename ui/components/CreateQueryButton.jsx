"use client";

import { useMutation } from "@apollo/client/react";
import { CREATE_QUERY } from "../graphql/mutations";
import { GET_QUERIES } from "../graphql/queries";

export default function CreateQueryButton() {
  const [createQuery, { loading }] = useMutation(CREATE_QUERY, {
    refetchQueries: [{ query: GET_QUERIES, variables: { limit: 10 } }],
  });

  return (
    <button onClick={() => createQuery()} disabled={loading}>
      {loading ? "Creating…" : "Create Query"}
    </button>
  );
}
