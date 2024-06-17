const express = require('express');
const router = express.Router();

const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');
const consultationRoomRoutes = require('./consultationRoomRoutes');
const queueRoutes = require('./queueRoutes');
const recordRoutes = require('./recordRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const paymentRoutes = require('./paymentRoutes');

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/consultationRooms', consultationRoomRoutes);
router.use('/queues', queueRoutes);
router.use('/records', recordRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;
