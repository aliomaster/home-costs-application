var controllers = require('./controllers');

module.exports = function(submod){
  submod.use('/', controllers.home);
  submod.use('/categories', controllers.categories);
};