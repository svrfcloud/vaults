// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title A minimal event‑emitting index for GraphQL and off‑chain pipelines
/// @author svrfcloud & pi
/// @notice Emits deterministic (idx, timestamp) pairs for off‑chain indexing.
contract Index {
    uint256 private i = 0;

    struct Query {
        uint256 idx;
        uint256 timestamp;
    }

    Query[] public query;

    event QueryCreated(uint256 indexed _idx, uint256 indexed _timestamp);

    function createQuery() public {
        query.push(Query({ idx: i, timestamp: block.timestamp }));
        emit QueryCreated(i, block.timestamp);
        i++;
    }
}