# vaults
Solidity contract + Node.js indexer + GraphQL API for querying timestamped EVM events.

A minimal, deterministic indexing pipeline that listens to EVM events, stores them in SQLite, and exposes them through a GraphQL API.
Designed for clarity, extensibility, and off‑chain analytics workflows.
This project demonstrates a clean architecture for:
 - event‑driven indexing
 - GraphQL‑based querying
 - timestamped event storage
 - deterministic contract behavior
 - local analytics and prototyping

## Start an Ethereum node, we are using Hardhat
```bash
npx hardhat node
```

## Run the Indexer
```bash
node graphql/indexer.js
```

## Run the Server
```bash
node graphql/server.js
```

## Change to the nextjs folder and run
```bash
npm run dev
```