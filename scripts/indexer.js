import { ethers } from "ethers"
import { readFileSync } from "fs";
import { ApolloServer } from '@apollo/server'
import { insertQuery } from "./graphql/db.js"
import { startStandaloneServer } from '@apollo/server/standalone'

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const signer = await provider.listAccounts();

const raw = readFileSync("./artifacts/contracts/Index.sol/Index.json", "utf-8");
const { abi, bytecode } = JSON.parse(rawData);
const factory = new ethers.ContractFactory(abi, bytecode, signer[0]);
const contract = await factory.deploy();
const tx = contract.createQuery();
await tx;

console.log("Listening for QueryCreated events...")

contract.on("QueryCreated", (idx, timestamp) => {
    insertQuery(idx, timestamp)
    console.log("Indexed:", idx, timestamp)
})

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`GraphQL running at ${url}`)