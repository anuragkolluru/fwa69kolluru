var express = require('express');
var router = express.Router();
var countValue = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  countValue = countValue+1;
  res.send('View count '+ countValue);
});

module.exports = router;
