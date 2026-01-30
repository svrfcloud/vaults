"use client";

import { useQuery } from "@apollo/client/react";
import { GET_QUERIES } from "../graphql/queries";

export default function QueryList({ limit }) {
  const { data, loading, error } = useQuery(GET_QUERIES, {
    variables: { limit },
    pollInterval: 1800, // real-time refresh
  });

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ marginTop: "1rem" }}>
      {data.queries.map((q) => (
        <div
          key={`${q.idx}-${q.timestamp}`}
          style={{
            padding: "1rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        >
          <p><strong>ID:</strong> {q.idx}</p>
          <p><strong>Timestamp:</strong> {q.timestamp}</p>
        </div>
      ))}
    </div>
  );
}
