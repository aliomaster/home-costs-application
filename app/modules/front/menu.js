var Category = require(__base + '/models/category');

module.exports = function(submod){

  submod.use(function(req, res, next){
    Category.find({}, function(err, categories){
      if(err) return res.send(500, 'Ошибка: ошибка базы данных');
      res.locals.menu = categories.map(function(c){
        return {
          title: c.title,
          href: submod.mountpath + 'categories/' + c.slug
        }
      });
      return next();
    });
  });

};
