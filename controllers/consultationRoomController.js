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
    const consultationRooms = await ConsultationRoom.findAll();
    res.status(200).json(consultationRooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getConsultationRoomById = async (req, res) => {
  try {
    const consultationRoom = await ConsultationRoom.findByPk(req.params.id);
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
    const [updated] = await ConsultationRoom.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Consultation room not found' });
    } else {
      const updatedConsultationRoom = await ConsultationRoom.findByPk(req.params.id);
      res.status(200).json(updatedConsultationRoom);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteConsultationRoom = async (req, res) => {
  try {
    const deleted = await ConsultationRoom.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Consultation room not found' });
    } else {
      res.status(200).json({ message: 'Consultation room deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
