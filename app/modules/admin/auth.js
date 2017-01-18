module.exports = function(submod){

  submod.get('/logout', function(req, res){
    req.session.logedin = false;
    req.session.auth = false;
    res.redirect(submod.mountpath);
  });

  submod.post('/', function(req, res){
    console.log(req.body);
    if(req.body.username === 'admin' && req.body.password === '123456'){
      req.session.logedin = true;
      req.session.auth = {
        username: "Admin"
      };
      res.redirect(submod.mountpath);
    }
  });

  submod.use(function(req, res, next){
    if(!req.session.logedin){
      res.render('login', {title: "Login", layout: '/simpleLayout'});
    } else {
      res.locals.auth = req.session.auth;
      return next();
    }
  });

};