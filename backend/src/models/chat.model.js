import pool from '../config/db.js';
import ThreadEntity from '../entities/thread.entity.js';
import MessageEntity from '../entities/message.entity.js';

const schema = 'chatbot';

const ChatModel = {
  // Thread methods
  async createThread(title) {
    const result = await pool.query(
      `INSERT INTO ${schema}.threads (title) VALUES ($1) RETURNING *`,
      [title]
    );
    return new ThreadEntity(result.rows[0]);
  },
  async findAllThreads() {
    const result = await pool.query(`SELECT * FROM ${schema}.threads ORDER BY created_at DESC`);
    return result.rows.map(row => new ThreadEntity(row));
  },
  async findThreadById(id) {
    const result = await pool.query(`SELECT * FROM ${schema}.threads WHERE id = $1`, [id]);
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  },
  async updateThread(id, title) {
    const result = await pool.query(
      `UPDATE ${schema}.threads SET title = $1 WHERE id = $2 RETURNING *`,
      [title, id]
    );
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  },
  async deleteThread(id) {
    const result = await pool.query(
      `DELETE FROM ${schema}.threads WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0] ? new ThreadEntity(result.rows[0]) : null;
  },
  // Message methods
  async createMessage(thread_id, sender, content) {
    const result = await pool.query(
      `INSERT INTO ${schema}.messages (thread_id, sender, content) VALUES ($1, $2, $3) RETURNING *`,
      [thread_id, sender, content]
    );
    return new MessageEntity(result.rows[0]);
  },
  async findAllMessagesByThread(thread_id) {
    const result = await pool.query(
      `SELECT * FROM ${schema}.messages WHERE thread_id = $1 ORDER BY created_at ASC`,
      [thread_id]
    );
    return result.rows.map(row => new MessageEntity(row));
  },
  async findMessageById(id) {
    const result = await pool.query(
      `SELECT * FROM ${schema}.messages WHERE id = $1`,
      [id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  },
  async updateMessage(id, content) {
    const result = await pool.query(
      `UPDATE ${schema}.messages SET content = $1 WHERE id = $2 RETURNING *`,
      [content, id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  },
  async deleteMessage(id) {
    const result = await pool.query(
      `DELETE FROM ${schema}.messages WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0] ? new MessageEntity(result.rows[0]) : null;
  }
};

export default ChatModel;
