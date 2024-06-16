const Payment = require('../models/payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.getAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.getById(req.params.id);
    if (!payment) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.update(req.params.id, req.body);
    if (!payment) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.delete(req.params.id);
    if (!payment) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentsByPatientInPeriod = async (req, res) => {
  try {
    const { patientId, startDate, endDate } = req.params;
    const result = await pool.query(
      'SELECT * FROM payments WHERE patient_id = $1 AND date BETWEEN $2 AND $3',
      [patientId, startDate, endDate]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
