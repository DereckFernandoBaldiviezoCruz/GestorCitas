const Appointment = require('../models/appointment');

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.getAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.getById(req.params.id);
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found' });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.update(req.params.id, req.body);
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found' });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.delete(req.params.id);
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found' });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPendingAppointmentsByPatient = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM appointments WHERE patient_id = $1 AND status = $2',
      [req.params.patientId, 'pending']
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPendingAppointmentsByDoctorAndDate = async (req, res) => {
  try {
    const { doctorId, date } = req.params;
    const result = await pool.query(
      'SELECT * FROM appointments WHERE doctor_id = $1 AND date::date = $2 AND status = $3',
      [doctorId, date, 'pending']
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
