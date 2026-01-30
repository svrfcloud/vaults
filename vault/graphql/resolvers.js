import { ethers } from "ethers";
import fs from "fs";
import { getQueries } from "./db.js";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");

const raw = fs.readFileSync("./artifacts/contracts/Index.sol/Index.json", "utf-8");
const { abi } = JSON.parse(raw);

const contractAddress = fs.readFileSync("./contractAddress.txt", "utf-8").trim();

export const resolvers = {
    Query: {
        queries: (_, { limit }) => getQueries(limit)
    },

    Mutation: {
        createQuery: async () => {
            const signer = await provider.listAccounts();
            const contract = new ethers.Contract(contractAddress, abi, signer[0]);
            // Implementation for creating a query event
            const tx = await contract.createQuery();
            await tx.wait();

            return true;
        }
    }
};