const express = require('express');
const router = express.Router();
const { TextDetection } = require('../controllers/Detection');

router.post('/text', TextDetection);

module.exports = router;