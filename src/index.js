/**
 * @project belt.js
 * @author scagood <belt@scagood.co.uk>
 * @license It's MIT when I get round to putting that in writing.
 */

'use strict';

var compare = require('./compare');
var generator = require('./generator');
var maths = require('./maths');
var physics = require('./physics');
var search = require('./search');
var shuffle = require('./shuffle');
var stats = require('./stats');
var util = require('./util');

module.exports = {
    compare: compare,
    generator: generator,
    gen: generator,
    math: maths,
    maths: maths,
    physics: physics,
    search: search,
    shuffle: shuffle,
    stats: stats,
    util: util
};
