var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('==== request IP === ',req.ip.toString().replace('::ffff:', ''))
  res.render('index', { title: `your IP Address is:: ${req.ip.toString().replace('::ffff:', '')}` });
});

module.exports = router;
