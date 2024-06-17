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
    const records = await Record.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const record = await Record.findByPk(req.params.id);
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
    const [updated] = await Record.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Record not found' });
    } else {
      const updatedRecord = await Record.findByPk(req.params.id);
      res.status(200).json(updatedRecord);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const deleted = await Record.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.status(200).json({ message: 'Record deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
