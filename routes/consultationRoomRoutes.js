const express = require('express');
const consultationRoomController = require('../controllers/consultationRoomController');

const router = express.Router();

router.post('/', consultationRoomController.createConsultationRoom);
router.get('/', consultationRoomController.getAllConsultationRooms);
router.get('/:id', consultationRoomController.getConsultationRoomById);
router.put('/:id', consultationRoomController.updateConsultationRoom);
router.delete('/:id', consultationRoomController.deleteConsultationRoom);

module.exports = router;
