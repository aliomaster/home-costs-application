var path = require('path');

var express = require('express');
var hbs = require('hbs').create();

var submod = express();

submod.disable('x-powered-by');
submod.set('views', path.join(__dirname, 'views'));
submod.engine('hbs', hbs.__express);

submod.use(require('less-middleware')(path.join(__dirname, 'public')));
submod.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

require('./auth')(submod);
require('./menu')(submod);
require('./controllers')(submod);

module.exports = submod;

