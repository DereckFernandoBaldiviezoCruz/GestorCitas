const Appointment = require('../models/appointment');
const { Op } = require('sequelize');

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
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
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
    const [updated] = await Appointment.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Appointment not found' });
    } else {
      const updatedAppointment = await Appointment.findByPk(req.params.id);
      res.status(200).json(updatedAppointment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Appointment not found' });
    } else {
      res.status(200).json({ message: 'Appointment deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPendingAppointmentsByDoctorAndDate = async (req, res) => {
  
  try {
    const { doctor_id, date } = req.params;
    const appointments = await Appointment.findAll({
      where: {
        doctor_id,
        date: {
          [Op.eq]: new Date(date)
        },
        status: 'pending'
      }
    });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};