const Record = require('../models/record');

exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllRecords = async (req, res) => {
  try {
    const records = await Record.getAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const record = await Record.getById(req.params.id);
    if (!record) {
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.status(200).json(record);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.update(req.params.id, req.body);
    if (!record) {
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.status(200).json(record);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.delete(req.params.id);
    if (!record) {
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.status(200).json(record);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
