var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`connected to DetectThis-API Stage ${process.env.STAGE}`);
});

module.exports = router;
