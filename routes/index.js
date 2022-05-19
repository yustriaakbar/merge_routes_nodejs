var express = require('express');
var rootRouter = express.Router();

var auth = require('./auth'); // panggil file auth.js
var user = require('./user'); // panggil file user.js

rootRouter.use('/', auth);
rootRouter.use('/', user);

module.exports = rootRouter;