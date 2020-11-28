var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});
router.get('/grain', function(req, res) {
  res.render('grain')
});
router.get('/raindrop', function(req, res) {
  res.render('grain')
});

module.exports = router;
