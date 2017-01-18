var express = require('express');
var router = express.Router();
var Category = require(__base + '/models/category');

router.get('/', function(req, res) {
  var data = {
    title: "Категории",
    addLink: req.baseUrl + '/add'
  };
  Category.find({}, function(err, categories){
    if(err) return res.send(500, 'Ошибка: ошибка базы данных');
    data.categories = categories.map(function(c){
      return {
        title: c.title,
        slug: c.slug
      }
    });
    res.render('categories/index', data);
  });
});

router
  .route('/add')
  .get(function (req, res) {
    var data = {
      title: "Добавить категорию "
    };
    res.render('categories/add', data);
  })
  .post(function (req, res) {
    var category = new Category({
      title: req.body.title,
      slug: req.body.slug
    });
    category.save(function(err, cat){
      if(err) return res.send(500, 'Ошибка: ошибка базы данных');
      res.redirect(303, '/admin/categories');
    });
  });

module.exports = router;