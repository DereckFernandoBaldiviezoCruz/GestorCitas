const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Payment {
  static async create(data) {
    const { patientId, amount, date } = data;
    const result = await pool.query(
      'INSERT INTO payments (patient_id, amount, date) VALUES ($1, $2, $3) RETURNING *',
      [patientId, amount, date]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM payments');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM payments WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { patientId, amount, date } = data;
    const result = await pool.query(
      'UPDATE payments SET patient_id = $1, amount = $2, date = $3 WHERE id = $4 RETURNING *',
      [patientId, amount, date, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM payments WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Payment;
