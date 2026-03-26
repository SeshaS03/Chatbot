import pool from '../config/db.js';
import AgentEntity from '../entities/agent.entity.js';

const schema = 'chatbot';

const AgentModel = {
    async create({ name, description, icon, order }) {
        const result = await pool.query(
            `INSERT INTO ${schema}.agent (name, description, icon, "order") VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, description, icon, order]
        );
        return new AgentEntity(result.rows[0]);
    },
    async findAll() {
        const result = await pool.query(`SELECT * FROM ${schema}.agent ORDER BY "order" ASC`);
        return result.rows.map(row => new AgentEntity(row));
    },
    async findById(id) {
        const result = await pool.query(`SELECT * FROM ${schema}.agent WHERE id = $1`, [id]);
        return result.rows[0] ? new AgentEntity(result.rows[0]) : null;
    },
    async update(id, { name, description, icon, order }) {
        const result = await pool.query(
            `UPDATE ${schema}.agent SET name = $1, description = $2, icon = $3, "order" = $4 WHERE id = $5 RETURNING *`,
            [name, description, icon, order, id]
        );
        return result.rows[0] ? new AgentEntity(result.rows[0]) : null;
    },
    async delete(id) {
        const result = await pool.query(
            `DELETE FROM ${schema}.agent WHERE id = $1 RETURNING *`,
            [id]
        );
        return result.rows[0] ? new AgentEntity(result.rows[0]) : null;
    }
};

export default AgentModel;
