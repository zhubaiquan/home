var express = require('express');
var router = express.Router();

const IndexControllers = require('../controllers/index')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});

//
router.post('/add', IndexControllers.add);

module.exports = router;
