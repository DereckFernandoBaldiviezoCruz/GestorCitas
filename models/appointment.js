const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Appointment {
  static async create(data) {
    const { patientId, doctorId, date, status } = data;
    const result = await pool.query(
      'INSERT INTO appointments (patient_id, doctor_id, date, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [patientId, doctorId, date, status]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM appointments');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM appointments WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { patientId, doctorId, date, status } = data;
    const result = await pool.query(
      'UPDATE appointments SET patient_id = $1, doctor_id = $2, date = $3, status = $4 WHERE id = $5 RETURNING *',
      [patientId, doctorId, date, status, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM appointments WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Appointment;
