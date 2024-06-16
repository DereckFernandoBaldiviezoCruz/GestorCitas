const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Record {
  static async create(data) {
    const { patientId, doctorId, details, date } = data;
    const result = await pool.query(
      'INSERT INTO records (patient_id, doctor_id, details, date) VALUES ($1, $2, $3, $4) RETURNING *',
      [patientId, doctorId, details, date]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM records');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM records WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { patientId, doctorId, details, date } = data;
    const result = await pool.query(
      'UPDATE records SET patient_id = $1, doctor_id = $2, details = $3, date = $4 WHERE id = $5 RETURNING *',
      [patientId, doctorId, details, date, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM records WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Record;
