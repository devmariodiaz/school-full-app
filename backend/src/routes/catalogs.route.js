const express = require('express');
const identificacionTypeCtrl = require('../controllers/identification-types.controller');
const jwt = require('../auth/jwt');

const router = express.Router();

router.get('/identification-types', jwt.verify, identificacionTypeCtrl.findAll);
router.post('/identification-types', jwt.verify, identificacionTypeCtrl.create);

module.exports = router;