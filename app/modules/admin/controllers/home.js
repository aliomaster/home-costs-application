var express = require('express');
var router = express.Router();

router
  .route('/')
  .get(function(req, res) {
    var data = {
      title: "Dashboard"
    };
    res.render('index', data);
  });

module.exports = router;