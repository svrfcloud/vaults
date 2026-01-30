#!/bin/bash

# Start Hardhat node in the background
npx hardhat node &
HARDHAT_PID=$!

sleep 2

# Start the indexer
node ~/vaults/vault/graphql/indexer.js &
INDEXER_PID=$!

# Start the GraphQL server
node ~/vaults/vault/graphql/server.js &
SERVER_PID=$!

echo "Hardhat PID: $HARDHAT_PID"
echo "Indexer PID: $INDEXER_PID"
echo "Server PID: $SERVER_PID"

# Kill children on exit
trap "kill $HARDHAT_PID $INDEXER_PID $SERVER_PID 2>/dev/null" EXIT

wait
