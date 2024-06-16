const Patient = require('../models/patient');

exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.getAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.getById(req.params.id);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      res.status(200).json(patient);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.update(req.params.id, req.body);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      res.status(200).json(patient);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.delete(req.params.id);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      res.status(200).json(patient);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
