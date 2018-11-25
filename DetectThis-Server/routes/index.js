const express = require('express');
const router = express.Router();
const DetectionsRoute = require('./detections');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`connected to DetectThis-API Stage ${process.env.STAGE}`);
});

router.use('/detections', DetectionsRoute);

module.exports = router;
