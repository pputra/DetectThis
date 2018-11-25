const express = require('express');
const router = express.Router();
const { HandleMultiForm } = require('../middlewares/fileHandler');

const { TextDetection } = require('../controllers/Detection');

router.use(HandleMultiForm.single('fileInput'));
router.post('/text', TextDetection);

module.exports = router;