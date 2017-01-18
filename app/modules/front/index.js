var path = require('path');

var express = require('express');
var hbs = require('hbs');
var config = require('../../config');

var submod = express();

submod.locals.sitename = config.sitename;
submod.disable('x-powered-by');

hbs.registerPartials(path.join(__dirname, 'views/partials'));
submod.set('views', path.join(__dirname, 'views'));
submod.set('view engine', 'hbs');

submod.use(require('less-middleware')(path.join(__dirname, 'public')));
submod.use('/static', express.static(path.join(__dirname, 'public')));

require('./menu')(submod);
require('./routes')(submod);

module.exports = submod;

