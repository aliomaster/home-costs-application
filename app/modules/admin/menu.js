module.exports = function(submod){

  submod.use(function(req, res, next){
    res.locals.menu = [
      {
        href: submod.mountpath + '/categories',
        title: "Категории"
      },
      {
        href: submod.mountpath + '/products',
        title: "Продукты"
      }
    ];
    return next();
  });

};
