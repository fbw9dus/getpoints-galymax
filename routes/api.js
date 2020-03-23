var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{user: 'fake', password: 'fake'}]);
});

module.exports = router;