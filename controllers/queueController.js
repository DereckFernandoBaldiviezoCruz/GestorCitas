const Queue = require('../models/queue');

exports.createQueue = async (req, res) => {
  try {
    const queue = await Queue.create(req.body);
    res.status(201).json(queue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllQueues = async (req, res) => {
  try {
    const queues = await Queue.getAll();
    res.status(200).json(queues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQueueById = async (req, res) => {
  try {
    const queue = await Queue.getById(req.params.id);
    if (!queue) {
      res.status(404).json({ message: 'Queue not found' });
    } else {
      res.status(200).json(queue);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQueue = async (req, res) => {
  try {
    const queue = await Queue.update(req.params.id, req.body);
    if (!queue) {
      res.status(404).json({ message: 'Queue not found' });
    } else {
      res.status(200).json(queue);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQueue = async (req, res) => {
  try {
    const queue = await Queue.delete(req.params.id);
    if (!queue) {
      res.status(404).json({ message: 'Queue not found' });
    } else {
      res.status(200).json(queue);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
