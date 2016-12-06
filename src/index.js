/**
 * @project belt.js
 * @author scagood <belt@scagood.co.uk>
 * @license It's MIT when I get round to putting that in writing.
 */

'use strict';

var compare = require('./compare');
var shuffle = require('./shuffle');
var maths = require('./maths');
var generator = require('./generator');

module.exports = {
    compare: compare,
    generator: generator,
    gen: generator,
    math: maths,
    maths: maths,
    shuffle: shuffle
};
