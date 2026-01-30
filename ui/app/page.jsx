"use client";

import Providers from "./providers";
import QueryList from "../components/QueryList";
import CreateQueryButton from "../components/CreateQueryButton";

export default function Page() {
  return (
    <Providers>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Vault Oracle Dashboard</h1>
        <CreateQueryButton />
        <QueryList limit={10} />
      </main>
    </Providers>
  );
}
