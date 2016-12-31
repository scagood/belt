/**
 * The maths module of belt.js
 * @module maths
 */

'use strict';

var comp = require('./compare');
var stats = require('./stats');

/**
 * A simple function to map a number from one range to another
 * @param  {Number} old  The number from the initial range
 * @param  {Number} fMin The lowest number in the 'from' range
 * @param  {Number} fMax The highest number in the 'from' range
 * @param  {Number} tMin The lowest number in the 'to' range
 * @param  {Number} tMax The highest number in the 'to' range
 * @return {Number}      The number in the new range
 */
var map = function (old, fMin, fMax, tMin, tMax) {
    // Catch divied by zero
    if (fMax - fMin === 0) {
        // If the range is 0 to 0 the the answer is always 0
        return 0;
    }
    return ((old - fMin) * (tMax - tMin) / (fMax - fMin)) + tMin;
};
/**
 * A function that maps based on probability between 2 points
 * @param  {Number} old  The input numer (between 0 and 1)
 * @param  {Number} low  The lowest number in the output range
 * @param  {Number} high The highest number in the output range
 * @param  {Number} prob [description]
 * @return {Number}      The number in the new range
 */
var probMap = function (old, low, high, prob) {
    low = comp.isDef(low) ? low : 0;
    high = comp.isDef(high) ? high : 1;
    prob = comp.isDef(prob) ? prob : 1;

    var res;
    if (old >= 0 && old <= (0.5 - (prob / 2))) {
        res = map(old, 0, (0.5 - (prob / 2)), 0, low);
    } else if (old >= (0.5 - (prob / 2)) && old <= (0.5 + (prob / 2))) {
        res = map(old, (0.5 - (prob / 2)), (0.5 + (prob / 2)), low, high);
    } else if (old >= (0.5 + (prob / 2)) && old <= 1) {
        res = map(old, (0.5 + (prob / 2)), 1, high, 1);
    } else {
        res = false;
    }
    return res;
};

/**
 * Shift an out of bounds number back into bounds.
 * @param  {Number} old The out of bounds number
 * @param  {Number} min The smallest number in the bounds range
 * @param  {Number} max The largest number in the bounds range
 * @return {Number}     The number after being moved within the bounds
 */
var moveToBounds = function (old, min, max) {
    while (old > max || old < min) {
        if (old < min) {
            old = min + (min - old);
        } else {
            old = max - (old - max);
        }
    }
    return old;
};

/**
 * Round 'number' to 'precision' decimal places
 * @param  {Number} number    The number to round
 * @param  {Number} precision The decimal places to round to
 * @return {Number}           The rounded number
 */
var roundDP = function (number, precision) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};
/**
 * Round 'number' to 'precision' significant figures
 * @param  {Number} number    The number to round
 * @param  {Number} precision The number of significant figures
 * @return {Number}           The rounded number
 */
var roundSF = function (number, precision) {
    var intCount = Math.ceil(Math.log10(number));
    if (intCount <= 0) {
        return roundDP(number, precision);
    }
    if (intCount < precision) {
        return roundDP(number, precision - intCount);
    }

    number /= Math.pow(10, intCount - precision);
    number = Math.round(number);
    number *= Math.pow(10, intCount - precision);

    return number;
};

/**
 * Summing the products of to Arrays
 * @param  {Array} m1 The first matrix
 * @param  {Array} m2 The second matrix
 * @return {Number}   The sum of the products
 */
var productSum = function (m1, m2) {
    var sum = 0;
    var a;

    if (m1.length !== m2.length) {
        return 0;
    }

    for (a = 0; a < m1.length; a++) {
        if (comp.isArray(m1[a]) && comp.isArray(m2[a])) {
            sum += productSum(m1[a], m2[a]);
        } else if (comp.isNumber(m1[a]) && comp.isNumber(m2[a])) {
            sum += m1[a] * m2[a];
        } else {
            throw new Error('Arrays don\'t match.');
        }
    }

    return sum;
};

/**
 * Find the value of points 'coords' in an n dimentional Gaussian Distribution
 * @param  {Array} coords  An 'N' dimentional array of coordinates
 * @param  {Number} stdDev The Standard Deviation to be used on calculating the curve
 * @return {Number}        The probability at 'coords'
 */
var gaussianDistribution = function (coords, stdDev) {
    stdDev = typeof stdDev === 'undefined' ? 1 : stdDev;
    var a;
    var b = 0;
    var c = 0;
    for (a = 0; a < coords.length; a++) {
        // Lighter than Math.pow?
        b += (coords[a] * coords[a]);
    }
    c = Math.pow(2 * Math.PI, 0.5) * stdDev;
    c = Math.pow(c, coords.length);

    return (1 / c) * Math.pow(Math.E, -b / (2 * stdDev * stdDev));
};

/**
 * Perform pythagoras' theorum
 * @param  {Number} x Length of 'opposite side'
 * @param  {Number} y Length of 'adjacent side'
 * @return {Number}   Length of 'hypotenuse'
 */
var pythag = function (x) {
    if (!comp.isDef(x)) {
        return 0;
    }
    var sum = stats.sumOfSquares(arguments, true);
    return Math.pow(sum, 0.5);
};

/**
 * Convert from radians to degrees
 * @param  {Number} angle Radians to convert to degrees
 * @return {Number}       Degrees
 */
var toDegrees = function (angle) {
    return angle * (180 / Math.PI);
};
/**
 * Convert from degrees to radians
 * @param  {Number} angle Degrees to convert to radians
 * @return {Number}       Radians
 */
var toRadians = function (angle) {
    return angle * (Math.PI / 180);
};

/**
 * The distance between two points
 * @param  {Number} x1 The 'x' component of the first coordinate
 * @param  {Number} y1 The 'y' component of the first coordinate
 * @param  {Number} x2 The 'x' component of the second coordinate
 * @param  {Number} y2 The 'y' component of the second coordinate
 * @return {Number}    The distance between the two points
 */
var distance = function (x1, y1, x2, y2) {
    return pythag(x2 - x1, y2 - y1);
};
/**
 * Calculate the computed angle about (x1,y1)
 * @param  {Number} x1 The 'x' component of the first coordinate
 * @param  {Number} y1 The 'y' component of the first coordinate
 * @param  {Number} x2 The 'x' component of the second coordinate
 * @param  {Number} y2 The 'y' component of the second coordinate
 * @return {Number}    The angle about (x1, y1) from (x2, y1) to (x2, y2)
 */
var angle = function (x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2);
};

/**
 * @typedef {Object} PolarPoint
 * @property {Number} r The radial coordinate
 * @property {Number} theta The angular coordinate
 */
/**
 * @typedef {Object} CartesianPoint
 * @property {Number} r The radial coordinate
 * @property {Number} theta The angular coordinate
 */

/**
 * Converting from cartesian to polar coordinates
 * @param  {Number} x The 'x' coordinate
 * @param  {Number} y The 'y' coordinate
 * @return {PolarPoint}   The polar coordinate of cartesian (x, y)
 */
var toPolar = function (x, y) {
    var r = distance(0, 0, x, y);
    var theta = angle(0, 0, x, y);

    return {
        r: r,
        theta: theta,
        thetaDeg: toDegrees(theta),
        thetaRads: theta
    };
};
/**
 * Converting from polar to cartesian coordinates
 * @param  {Number} r        The radial coordinate
 * @param  {Number} theta    The angular coordinate
 * @param  {boolean} radians Is theta in radians
 * @return {CartesianPoint}  The Cartesian form of polar (r, theta)
 */
var toCartesian = function (r, theta, radians) {
    radians = comp.isDef(radians) ? radians : true;

    if (!radians) {
        theta = toRadians(theta);
    }

    var x = r * Math.cos(theta);
    var y = r * Math.sin(theta);

    return {
        x: x,
        y: y
    };
};

/**
 * The Cosine Rule rearranged to find Length
 * @param  {Number} a Length of one side a triangle
 * @param  {Number} b Length of the other side of a triangle
 * @param  {Number} C Angle opposite to the side of the triangle that you want to get
 * @return {Number}   Length of the side opposite to angle C
 */
var cosineRuleLength = function (a, b, C) { // Return c
    // c = (a^2 + b^2 - 2*a*b*cos(C))^0.5
    var c = 2 * a * b * Math.cos(C);
    c = Math.pow(a, 2) + Math.pow(b, 2) - c;
    return Math.pow(c, 0.5);
};
/**
 * The Cosine Rule arranged to find angles
 * @param  {Number} a Length opposite to the requied angles
 * @param  {Number} b Length of one side a triangle
 * @param  {Number} c Length of the other side of a triangle
 * @return {Number}   The required angle
 */
var cosineRuleAngle = function (a, b, c) { // Returns A
    // acos((b^2 + c^2 - a^2)/(2*b*c)) = A
    var top = Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2);
    var bottom = 2 * b * c;
    return bottom === 0 ? Math.PI / 2 : Math.acos(top / bottom);
};

/**
 * The Sine Rule rearranged to find Length
 * @param  {Number} a Length of the side of a triangle opposite to angle A
 * @param  {Number} A Angle opposite to side a
 * @param  {Number} B Angle opposite to the side of the triangle that you want to get
 * @return {Number}   Length of the side opposite to angle B
 */
var sineRuleLength = function (a, A, B) { // Returns b
    // sin(A)/a = sin(B)/b = sin(C)/c
    return Math.sin(A) / (a * Math.sin(B));
};
/**
 * The Sine Rule arranged to find angles
 * @param  {Number} a Length of the side of a triangle opposite to angle A
 * @param  {Number} A Angle opposite to side a
 * @param  {Number} b Length opposite to the angle that you want to get
 * @return {Number}   Angle opposite to side b
 */
var sineRuleAngle = function (a, A, b) { // Returns B
    // sin(A)/a = sin(B)/b = sin(C)/c
    return Math.asin(b * (Math.sin(A) / a));
};

module.exports = {
    map: map,
    probMap: probMap,
    moveToBounds: moveToBounds,
    roundDP: roundDP,
    roundSF: roundSF,
    productSum: productSum,
    gaussianDistribution: gaussianDistribution,
    pythag: pythag,
    toDegrees: toDegrees,
    toRadians: toRadians,
    distance: distance,
    angle: angle,
    toPolar: toPolar,
    toCartesian: toCartesian,
    cosineRuleLength: cosineRuleLength,
    cosineRuleAngle: cosineRuleAngle,
    sineRuleLength: sineRuleLength,
    sineRuleAngle: sineRuleAngle
};
