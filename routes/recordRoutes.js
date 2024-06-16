const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.post('/', recordController.createRecord);
router.get('/', recordController.getAllRecords);
router.get('/:id', recordController.getRecordById);
router.put('/:id', recordController.updateRecord);
router.delete('/:id', recordController.deleteRecord);

module.exports = router;
