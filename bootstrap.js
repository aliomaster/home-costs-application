var express = require('express');
var app = express();

global.__base = __dirname + '/app';

app.set('port', process.env.PORT || 3015);
require('./app/middlewares')(app, express);

var modules = require('./app/config').modules;
Object.keys(modules).forEach(function(key) {
  this.use(modules[key].mountpath, require('./app/modules/' + key));
}, app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function(){
  console.log('Site started on http://localhost:' + app.get('port'));
});

