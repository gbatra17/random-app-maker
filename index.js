var uniqueRandomArray = require('unique-random-array');
var types = require('./type.json');
var industry = require('./industry.json');

exports.types = types;
exports.industry = industry;
exports.typesRandom = uniqueRandomArray(types);
exports.industryRandom = uniqueRandomArray(industry);
