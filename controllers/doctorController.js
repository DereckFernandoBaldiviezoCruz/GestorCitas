const Doctor = require('../models/doctor');

exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
    } else {
      res.status(200).json(doctor);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const [updated] = await Doctor.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Doctor not found' });
    } else {
      const updatedDoctor = await Doctor.findByPk(req.params.id);
      res.status(200).json(updatedDoctor);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const deleted = await Doctor.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Doctor not found' });
    } else {
      res.status(200).json({ message: 'Doctor deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
