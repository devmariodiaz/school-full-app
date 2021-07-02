const express = require('express');
const userCtrl = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signup', userCtrl.create);
router.post('/signin', userCtrl.signin);

module.exports = router;
