var express= require("express");
var Product = require("../models/products");

var router = express.Router();
router.get('/', function(req, res, next) {
	res.get('X-Frame-Options') ;
  res.render('index', { title: 'Express' });
});

module.exports = router;