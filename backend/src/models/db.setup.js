import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

export async function ensureDatabaseAndTables() {
  // Connect to the existing postgres database
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres', // always use the default postgres DB
  });
  await client.connect();
  const schema = 'chatbot';
  await client.query(`
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
  await client.end();
}
