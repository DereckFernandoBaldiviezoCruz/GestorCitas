const ConsultationRoom = require('../models/consultationRoom');

exports.createConsultationRoom = async (req, res) => {
  try {
    const consultationRoom = await ConsultationRoom.create(req.body);
    res.status(201).json(consultationRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllConsultationRooms = async (req, res) => {
  try {
    const consultationRooms = await ConsultationRoom.getAll();
    res.status(200).json(consultationRooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getConsultationRoomById = async (req, res) => {
  try {
    const consultationRoom = await ConsultationRoom.getById(req.params.id);
    if (!consultationRoom) {
      res.status(404).json({ message: 'Consultation room not found' });
    } else {
      res.status(200).json(consultationRoom);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConsultationRoom = async (req, res) => {
  try {
    const consultationRoom = await ConsultationRoom.update(req.params.id, req.body);
    if (!consultationRoom) {
      res.status(404).json({ message: 'Consultation room not found' });
    } else {
      res.status(200).json(consultationRoom);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteConsultationRoom = async (req, res) => {
  try {
    const consultationRoom = await ConsultationRoom.delete(req.params.id);
    if (!consultationRoom) {
      res.status(404).json({ message: 'Consultation room not found' });
    } else {
      res.status(200).json(consultationRoom);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
