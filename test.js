'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var app = require(path.resolve('./config/lib/app'));

//Testing new commits
var html = require('html')

app.init(function () {
  console.log('Initialized test automation');
});
