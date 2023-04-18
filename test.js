'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var app = require(path.resolve('./config/lib/app'));

//Testing commit change
var html = require('html')


app.init(function () {
  console.log('Initialized test automation');
});
