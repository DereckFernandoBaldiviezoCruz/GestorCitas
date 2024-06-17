const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

router.post('/', queueController.createQueue);
router.get('/', queueController.getAllQueues);
router.get('/:id', queueController.getQueueById);
router.put('/:id', queueController.updateQueue);
router.delete('/:id', queueController.deleteQueue);

module.exports = router;
