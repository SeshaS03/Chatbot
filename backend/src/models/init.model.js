import pool from '../config/db.js';

const schema = 'public'; // Change to your schema if needed

export async function createTables() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS ${schema};
    CREATE TABLE IF NOT EXISTS ${schema}.threads (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS ${schema}.messages (
      id SERIAL PRIMARY KEY,
      thread_id INTEGER REFERENCES ${schema}.threads(id) ON DELETE CASCADE,
      sender VARCHAR(50),
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
