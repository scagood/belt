/**
 * The statistic module of belt.js
 * @module stats
 */

'use strict';

var comp = require('./compare');
var util = require('./util');

/**
 * Gets the length of the longest array in an n-dimentional 'array' at 'depth'
 * @param {Array} array   The array
 * @param {Number} depth  What level should the function search (0 implies counting layer 1)
 * @param {Bool} objects  Should the function search objects as well
 * @return {Null}        Null if no arrays were found at 'depth'
 * @return {Number}      Length of longest array at 'depth'
* */
var maxLength = function (array, depth, objects, first) {
    depth = comp.isDefined(depth) ? depth : 0;
    first = !first;

    var a;
    var b;
    var l = -1; // Cant get shorter

    if (comp.isArray(array) || (objects === true && comp.isObject(array))) {
        for (a in array) {
            if ({}.hasOwnProperty.call(array, a)) {
                if (depth > 0) {
                    b = maxLength(array[a], depth - 1, objects, true);
                } else if (comp.isArray(array[a]) || comp.isObject(array[a])) {
                    b = Object.keys(array[a]).length;
                }
                l = b > l ? b : l;
            }
        }
    }
    return first && l === -1 ? null : l;
};
/**
 * Gets the length of the shortest array in an n-dimentional 'array' at 'depth'
 * @param {Array} array   The array
 * @param {Number} depth  What level should the function search (0 implies counting layer 1)
 * @param {Bool} objects  Should the function search objects as well
 * @return {Null}        Null if no arrays were found at 'depth'
 * @return {Number}      Length of shortest array at 'depth'
* */
var minLength = function (array, depth, objects, first) {
    depth = comp.isDefined(depth) ? depth : 0;
    first = !first;

    var a;
    var b;
    var l = 4294967296; // Cant get longer (2^32 - 1)

    if (comp.isArray(array) || (objects === true && comp.isObject(array))) {
        for (a in array) {
            if ({}.hasOwnProperty.call(array, a)) {
                if (depth > 0) {
                    b = minLength(array[a], depth - 1, objects, true);
                } else if (comp.isArray(array[a]) || comp.isObject(array[a])) {
                    b = Object.keys(array[a]).length;
                }

                l = b < l ? b : l;
            }
        }
    }

    return first && l === 4294967296 ? null : l;
};

/**
 * Gets the heighest number in an n-dimentional 'array'
 * @param {Array} array   The array
 * @param {Bool} objects  Should the function search objects as well
 * @return {Array}       The heighest and lowest numbers in 'array' as follows {max: max, min, min}
* */
var mnmNumber = function (array, objects) {
    var mx = util.first(array, objects);
    var mn = mx;
    util.forAll(array, e => {
        if (comp.isNumber(mx) && mx < e) {
            mx = e;
        }
        if (comp.isNumber(mn) && mn > e) {
            mn = e;
        }
    }, objects);

    return {
        max: mx,
        min: mn
    };
};
/**
 * Gets the heighest number in an n-dimentional 'array'
 * @param {Array} array   The array
 * @param {Bool} objects  Should the function search objects as well
 * @return {Number}      The heighest number in 'array'
* */
var maxNumber = function (array, objects) {
    var a = util.first(array, objects);
    util.forAll(array, e => {
        if (comp.isNumber(e) && a < e) {
            a = e;
        }
    }, objects);

    return a;
};
/**
 * Gets the lowest number in an n-dimentional 'array'
 * @param {Array} array   The array
 * @param {Bool} objects  Should the function search objects as well
 * @return {Number}      The lowest number in 'array'
* */
var minNumber = function (array, objects) {
    var a = util.first(array, objects);
    util.forAll(array, e => {
        if (comp.isNumber(e) && a > e) {
            a = e;
        }
    }, objects);

    return a;
};

/**
 * Gets the range of all numbers in an n-dimentional 'array'
 * @param {Array} array   The array
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}      The range of 'array' (max - min)
* */
var range = function (array, objects) {
    var mnm = mnmNumber(array, objects);
    return mnm.max - mnm.min;
};
/**
 * Gets the Mid-range of all numbers in an n-dimentional 'array'
 * @param {Array} array   The array
 * @param {Bool} objects  Should the function search objects as well
 * @return {Number}      The arithmetic mean of the maximum and minimum values of 'array'
* */
var midRange = function (array, objects) {
    var mnm = mnmNumber(array, objects);
    return (mnm.max + mnm.min) / 2;
};

/**
 * Calculate the sum of 'array'
 * @param  {Array} array   An array of numbers to get the sum of
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The sum of numbers in 'array'
 */
var sum = function (array, objects) {
    var t = 0;
    util.forAll(array, e => {
        if (comp.isNumber(e)) {
            t += e;
        }
    }, objects);

    return t;
};
/**
 * Calculate the histogram of 'array'
 * @param  {Array} array   An array of numbers to a histogram of
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Array}        The histogram array of all numbers in 'array'
 */
var histogram = function (array, objects) {
    var a;
    var h = {};
    util.forAll(array, e => {
        if (comp.isNumber(e)) {
            if (!comp.isDef(h[e])) {
                h[e] = 0;
            }
            h[e]++;
        }
    }, objects);

    for (a = 0; a < h.length; a++) {
        if (!comp.isDef(h[a])) {
            h[a] = 0;
        }
    }

    return h;
};

/**
 * Calculate the mean of 'array'
 * @param  {Array} array   An array of points to get the mean of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The mean of numbers in 'array'
 */
var mean = function (array, objects) {
    var t = 0;
    var c = 0;
    util.forAll(array, e => {
        if (comp.isNumber(e)) {
            t += e;
            c++;
        }
    }, objects);

    return t / c;
};

/**
 * Calculate the median of 'array'
 * @param  {Array} array   An array of points to get the median of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The median of numbers in 'array'
 */
var median = function (array, objects) {
    var f = [];

    f.add = e => {
        f[f.length] = e;
    };

    util.forAll(array, f.add, objects);

    var l = Math.floor(f.length / 2);

    return f.length % 2 ? f[l] : (f[l--] + f[l]) / 2;
};
/**
 * Calculate the median of 'array'
 * @param  {Array} array   An array of points to get the median of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The median of numbers in 'array'
 */
var mode = function (array, objects) {
    var h = histogram(array, objects);
    var o = {
        count: maxNumber(h, true),
        values: []
    };

    util.forAll(h, (e, l) => {
        if (e === o.count) {
            o.values[o.values.length] = l[0];
        }
    }, true);

    return o;
};

/**
 * Calculate the Sum of Squared Deviation of 'array' {sum([xn-mean]^2).between(0, n)}
 * @param  {Array} array   An array of points to get the Sum of Squared Deviation of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The Sum of Squared Deviation of numbers in 'array'
 */
var sumOfSquaredDeviation = function (array, objects) {
    var m = mean(array, objects);
    var o = 0;

    util.forAll(array, e => {
        if (comp.isNum(e)) {
            o += (e - m) * (e - m);
        }
    }, objects);

    return o;
};
/**
 * Calculate the Sum of Squares of 'array' {sum(xn^2).between(0, n)}
 * @param  {Array} array   An array of points to get the Sum of Squares of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The Sum of Squares of numbers in 'array'
 */
var sumOfSquares = function (array, objects) {
    var o = 0;
    util.forAll(array, e => {
        if (comp.isNum(e)) {
            o += (e) * (e);
        }
    }, objects);
    return o;
};
/**
 * Calculate the Mean Deviation of 'array' {(sum([xn-mean]^2).between(0, n))/n}
 * @param  {Array} array   An array of points to get the Mean Deviation of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The Mean Deviation of numbers in 'array'
 */
var meanDeviation = function (array, objects) {
    var m = mean(array, objects);
    var o = 0;
    var n = 0;

    util.forAll(array, e => {
        if (comp.isNum(e)) {
            o += (e - m) * (e - m);
            n++;
        }
    }, objects);

    return o / n;
};
/**
 * Calculate the Root Mean Square of 'array' {sqrt(sum(xn^2).between(0, n) / n)}
 * @param  {Array} array   An array of points to get the Root Mean Square of.
 * @param  {Bool} objects  Should the function search objects as well
 * @return {Number}        The Root Mean Square of numbers in 'array'
 */
var rootMeanSquare = function (array, objects) {
    return Math.pow(sumOfSquares(array, objects) / util.count(array, objects, 'number'), 1 / 2);
};

/**
 * Calculate the Standard Deviation of 'array'
 * @param  {Array} array   An array of points to get the Standard Deviation of.
 * @param  {Bool} objects  Should the function search objects as well
 * @param  {Boolean} sample Is this a sample of the population
 * @return {Number}         The Standard Deviation of the 'array'
 */
var standardDeviation = function (array, objects, sample) {
    var c = util.count(array, objects, 0) - Boolean(sample);
    return Math.pow(sumOfSquaredDeviation(array, objects) / c, 0.5);
};
/**
 * Calculate the variance of 'array'
 * @param  {Array} array   An array of points to get the Standard Deviation of.
 * @param  {Bool} objects  Should the function search objects as well
 * @param  {Boolean} sample Is this a sample of the population
 * @return {Number}         The Standard Deviation of the 'array'
 */
var variance = function (array, objects, sample) {
    var c = util.count(array, objects, 0) - Boolean(sample);
    return sumOfSquaredDeviation(array, objects) / c;
};

module.exports = {
    maxLength: maxLength,
    minLength: minLength,
    mnmNumber: mnmNumber,
    maxNumber: maxNumber,
    minNumber: minNumber,
    range: range,
    midRange: midRange,
    sum: sum,
    histogram: histogram,
    mean: mean,
    median: median,
    mode: mode,
    sumOfSquaredDeviation: sumOfSquaredDeviation,
    sumOfSquares: sumOfSquares,
    meanDeviation: meanDeviation,
    rootMeanSquare: rootMeanSquare,
    standardDeviation: standardDeviation,
    variance: variance
};
