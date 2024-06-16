const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Patient {
  static async create(data) {
    const { name, age, contactInfo } = data;
    const result = await pool.query(
      'INSERT INTO patients (name, age, contact_info) VALUES ($1, $2, $3) RETURNING *',
      [name, age, contactInfo]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM patients');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM patients WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { name, age, contactInfo } = data;
    const result = await pool.query(
      'UPDATE patients SET name = $1, age = $2, contact_info = $3 WHERE id = $4 RETURNING *',
      [name, age, contactInfo, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM patients WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Patient;
