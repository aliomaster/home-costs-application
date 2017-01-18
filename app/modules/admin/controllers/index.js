module.exports = function(submod){
  submod.use('/', require('./home'));
  submod.use('/categories', require('./categories'));
};
