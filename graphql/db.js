import Database from 'better-sqlite3';

const db = new Database('queries.db');

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS queries (
    idx INTEGER,
    timestamp INTEGER
  )
`).run();

export function insertQuery(idx, timestamp) {
    db.prepare(
        "INSERT INTO queries (idx, timestamp) VALUES (?, ?)"
    ).run(idx, timestamp)
};

export function getQueries(limit = 50) {
    return db.prepare(
        "SELECT idx, timestamp FROM queries ORDER BY idx DESC LIMIT ?"
    ).all(limit)
};