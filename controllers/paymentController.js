const Payment = require('../models/payment');
const { Op } = require('sequelize');

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
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
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
    const [updated] = await Payment.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      const updatedPayment = await Payment.findByPk(req.params.id);
      res.status(200).json(updatedPayment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const deleted = await Payment.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json({ message: 'Payment deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentsByPatientAndDate = async (req, res) => {
  const { patient_id, startDate, endDate } = req.query;
  try {
    console.log(patient_id+""+startDate+""+endDate);
    const payments = await Payment.findAll({
      where: {
        patient_id: req.params.patient_id,
        date: {
          [Op.between]: [new Date(startDate), new Date(endDate)]
        }
      }
    });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};