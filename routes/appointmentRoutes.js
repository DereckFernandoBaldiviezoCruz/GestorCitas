const express = require('express');
const appointmentController = require('../controllers/appointmentController');

const router = express.Router();

router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

router.get('/patient/:patientId/pending', appointmentController.getPendingAppointmentsByPatient);
router.get('/doctor/:doctorId/date/:date/pending', appointmentController.getPendingAppointmentsByDoctorAndDate);

module.exports = router;
