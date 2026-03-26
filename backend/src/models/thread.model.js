import pool from '../config/db.js';
import ThreadEntity from '../entities/thread.entity.js';

const schema = 'chatbot';

const ThreadModel = {
  async create(title) {
    const result = await pool.query(
      `INSERT INTO ${schema}.threads (title) VALUES ($1) RETURNING *`,
      [title]
    );
    return new ThreadEntity(result.rows[0]);
  },
  async findAll() {
    const result = await pool.query(`SELECT * FROM ${schema}.threads ORDER BY created_at DESC`);
    return result.rows.map(row => new ThreadEntity(row));
  },
  async findById(id) {
    const result = await pool.query(`SELECT * FROM ${schema}.threads WHERE id = $1`, [id]);
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  },
  async update(id, title) {
    const result = await pool.query(
      `UPDATE ${schema}.threads SET title = $1 WHERE id = $2 RETURNING *`,
      [title, id]
    );
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  },
  async delete(id) {
    const result = await pool.query(
      `DELETE FROM ${schema}.threads WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  }
};

export default ThreadModel;
