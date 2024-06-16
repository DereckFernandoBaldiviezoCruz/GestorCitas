const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const consultationRoomRoutes = require('./routes/consultationRoomRoutes');
const queueRoutes = require('./routes/queueRoutes');
const recordRoutes = require('./routes/recordRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(bodyParser.json());

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/consultation-rooms', consultationRoomRoutes);
app.use('/queues', queueRoutes);
app.use('/records', recordRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { pool };
