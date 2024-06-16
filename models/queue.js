const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Queue {
  static async create(data) {
    const { patientId, doctorId, status } = data;
    const result = await pool.query(
      'INSERT INTO queues (patient_id, doctor_id, status) VALUES ($1, $2, $3) RETURNING *',
      [patientId, doctorId, status]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM queues');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM queues WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { patientId, doctorId, status } = data;
    const result = await pool.query(
      'UPDATE queues SET patient_id = $1, doctor_id = $2, status = $3 WHERE id = $4 RETURNING *',
      [patientId, doctorId, status, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM queues WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Queue;
