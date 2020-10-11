var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dsc', function(req, res, next) {
  res.send('you send me by Post Method!');
});

module.exports = router;
