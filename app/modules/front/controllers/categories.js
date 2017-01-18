var express = require('express');
var router = express.Router();

router.get('/:slug', function(req, res) {
  var data = {
    title: req.params.slug
  };
  res.render('category', data);
});

module.exports = router;