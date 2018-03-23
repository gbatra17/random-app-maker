#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomAppMaker = require('./');

var cli = meow([
	'Examples',
	'  $ random-app-maker',
	'  A VR App for museums',
]);

console.log(`${randomAppMaker.typesRandom()} for ${randomAppMaker.industryRandom()}`);
