const express = require('express');
const studentCtrl = require('../controllers/student.controller');
const router = express.Router();

router.get('/', studentCtrl.findAll);
router.post('/', studentCtrl.create);

module.exports = router;