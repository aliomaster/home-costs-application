var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = {
    title: "Home page"
  };
  res.render('index', data);
});

module.exports = router;