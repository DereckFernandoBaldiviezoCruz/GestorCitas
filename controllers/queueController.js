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
    const queues = await Queue.findAll();
    res.status(200).json(queues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQueueById = async (req, res) => {
  try {
    const queue = await Queue.findByPk(req.params.id);
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
    const [updated] = await Queue.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      res.status(404).json({ message: 'Queue not found' });
    } else {
      const updatedQueue = await Queue.findByPk(req.params.id);
      res.status(200).json(updatedQueue);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQueue = async (req, res) => {
  try {
    const deleted = await Queue.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      res.status(404).json({ message: 'Queue not found' });
    } else {
      res.status(200).json({ message: 'Queue deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
