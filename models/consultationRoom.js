const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class ConsultationRoom {
  static async create(data) {
    const { roomNumber } = data;
    const result = await pool.query(
      'INSERT INTO consultation_rooms (room_number) VALUES ($1) RETURNING *',
      [roomNumber]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query('SELECT * FROM consultation_rooms');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM consultation_rooms WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { roomNumber } = data;
    const result = await pool.query(
      'UPDATE consultation_rooms SET room_number = $1 WHERE id = $2 RETURNING *',
      [roomNumber, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM consultation_rooms WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = ConsultationRoom;
