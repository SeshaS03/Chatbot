import pool from '../config/db.js';
import MessageEntity from '../entities/message.entity.js';

const schema = 'chatbot';

const MessageModel = {
  async create(thread_id, sender, content) {
    const result = await pool.query(
      `INSERT INTO ${schema}.messages (thread_id, sender, content) VALUES ($1, $2, $3) RETURNING *`,
      [thread_id, sender, content]
    );
    return new MessageEntity(result.rows[0]);
  },
  async findAllByThread(thread_id) {
    const result = await pool.query(
      `SELECT * FROM ${schema}.messages WHERE thread_id = $1 ORDER BY created_at ASC`,
      [thread_id]
    );
    return result.rows.map(row => new MessageEntity(row));
  },
  async findById(id) {
    const result = await pool.query(
      `SELECT * FROM ${schema}.messages WHERE id = $1`,
      [id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  },
  async update(id, content) {
    const result = await pool.query(
      `UPDATE ${schema}.messages SET content = $1 WHERE id = $2 RETURNING *`,
      [content, id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  },
  async delete(id) {
    const result = await pool.query(
      `DELETE FROM ${schema}.messages WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  }
};

export default MessageModel;
