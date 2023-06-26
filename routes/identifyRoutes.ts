const express = require('express');
const identifyController = require('../controllers/identifyController.ts');

const router = express.Router();

router.post('/identify', identifyController.identify);

module.exports = router;

