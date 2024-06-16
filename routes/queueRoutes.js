const express = require('express');
const queueController = require('../controllers/queueController');

const router = express.Router();

router.post('/', queueController.createQueue);
router.get('/', queueController.getAllQueues);
router.get('/:id', queueController.getQueueById);
router.put('/:id', queueController.updateQueue);
router.delete('/:id', queueController.deleteQueue);

module.exports = router;
