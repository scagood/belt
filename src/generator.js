/**
 * The generation module of belt.js
 * @module generator
 */

'use strict';

var isDef = require('./compare').isDef;

/**
 * Generates a random float between min & max
 * @param {Number} min  The minimum number
 * @param {Number} max  The maximum number
 * @return {Number}     The random float
* */
var random = function (max, min) {
    max = isDef(max) ? Math.round(max) : 1;
    min = isDef(min) ? Math.round(min) : 0;
    return (Math.random() * (max - min)) + min;
};

/**
 * Generates a random integer between min & max
 * @param {Number} min  The minimum number
 * @param {Number} max  The maximum number
 * @return {Number}     The random integer
* */
var randomInt = function (max, min) {
    max = isDef(max) ? Math.round(max) : 1;
    min = isDef(min) ? Math.round(min) : 0;

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a random array[size][depth] in dimentions
 * @param {Number} size   The size of the array
 * @param {Number} depth  The depth of the array
 * @param {Number} min    The minimum number to generate for inside array
 * @param {Number} max    The maximum number to generate for inside array
 * @return {Array}        Length of longest array at 'depth'
* */
var randomArray = function (size, depth, max, min) {
    var out = [];
    var arr;
    var a;
    while (size--) {
        arr = [];
        a = depth;
        while (a--) {
            arr.push(randomInt(max, min));
        }
        out.push(arr);
    }

    return out;
};

module.exports = {
    rand: random,
    randArray: randomArray,
    randInt: randomInt,
    random: random,
    randomArray: randomArray,
    randomInt: randomInt
};
