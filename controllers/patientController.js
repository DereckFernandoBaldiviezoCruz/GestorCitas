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
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
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
    const [updated] = await Patient.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      const updatedPatient = await Patient.findByPk(req.params.id);
      res.status(200).json(updatedPatient);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const deleted = await Patient.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      res.status(200).json({ message: 'Patient deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
