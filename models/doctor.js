const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Doctor {
  static async create(data) {
    const { name, specialization } = data;
    const result = await pool.query(
      'INSERT INTO doctors (name, specialization) VALUES ($1, $2) RETURNING *',
      [name, specialization]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM doctors');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM doctors WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { name, specialization } = data;
    const result = await pool.query(
      'UPDATE doctors SET name = $1, specialization = $2 WHERE id = $3 RETURNING *',
      [name, specialization, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM doctors WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Doctor;
