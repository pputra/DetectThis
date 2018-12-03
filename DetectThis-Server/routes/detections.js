const express = require('express');
const router = express.Router();
const { HandleMultiForm } = require('../middlewares/fileHandler');

const { TextDetection, BrandDetection, ObjectDetection } = require('../controllers/Detection');

router.use(HandleMultiForm.single('fileInput'));
router.post('/text', TextDetection);
router.post('/brand', BrandDetection);
router.post('/object', ObjectDetection);

module.exports = router;