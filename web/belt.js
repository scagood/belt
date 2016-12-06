var belt =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @project belt.js
	 * @author scagood <belt@scagood.co.uk>
	 * @license It's MIT when I get round to putting that in writing.
	 */

	'use strict';

	var compare = __webpack_require__(1);
	var shuffle = __webpack_require__(2);
	var maths = __webpack_require__(3);
	var generator = __webpack_require__(4);

	module.exports = {
	    compare: compare,
	    generator: generator,
	    gen: generator,
	    math: maths,
	    maths: maths,
	    shuffle: shuffle
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Compare Objects
	var compareObjectsComplex = function (o, p) {
	    var i;
	    var keysO = Object.keys(o).sort();
	    var keysP = Object.keys(p).sort();
	    if (keysO.length !== keysP.length) {
	        return false;
	    } // not the same nr of keys
	    if (keysO.join('') !== keysP.join('')) {
	        return false;
	    } // different keys
	    for (i = 0; i < keysO.length; ++i) {
	        if (o[keysO[i]] instanceof Array) {
	            if (!(p[keysO[i]] instanceof Array)) {
	                return false;
	            }
	            // if (compareObjectsComplex(o[keysO[i]], p[keysO[i]] === false) return false
	            // would work, too, and perhaps is a better fit, still, this is easy, too
	            if (p[keysO[i]].sort().join('') !== o[keysO[i]].sort().join('')) {
	                return false;
	            }
	        } else if (o[keysO[i]] instanceof Date) {
	            if (!(p[keysO[i]] instanceof Date)) {
	                return false;
	            }
	            if ((String(o[keysO[i]])) !== (String(p[keysO[i]]))) {
	                return false;
	            }
	        } else if (o[keysO[i]] instanceof Function) {
	            if (!(p[keysO[i]] instanceof Function)) {
	                return false;
	            }
	            // ignore functions, or check them regardless?
	        } else if (o[keysO[i]] instanceof Object) {
	            if (!(p[keysO[i]] instanceof Object)) {
	                return false;
	            }
	            if (o[keysO[i]] === o) { // self reference?
	                if (p[keysO[i]] !== p) {
	                    return false;
	                }
	            } else if (compareObjectsComplex(o[keysO[i]], p[keysO[i]]) === false) {
	                return false;
	            } // WARNING: does not deal with circular refs other than ^^
	        }
	        // change !== to != for loose comparison
	        if (o[keysO[i]] !== p[keysO[i]]) {
	            return false;
	        } // not the same value
	    }
	    return true;
	};
	var compareObjectsSimple = function (o, p) {
	    return JSON.stringify(o) === JSON.stringify(p);
	};

	// Simple Type Confirmations
	var isArray = function (test) {
	    var arrayType = Object.prototype.toString.call([]);
	    var testType = Object.prototype.toString.call(test);
	    return arrayType === testType;
	};
	var isDefined = function (test) {
	    return typeof test !== 'undefined';
	};
	var isFunction = function (test) {
	    var arrayType = Object.prototype.toString.call(function () {});
	    var testType = Object.prototype.toString.call(test);
	    return arrayType === testType;
	};
	var isNull = function (test) {
	    return test === null;
	};
	var isNumber = function (test) {
	    return !isNaN(test);
	};
	var isObject = function (test) {
	    var objectType = Object.prototype.toString.call({});
	    var testType = Object.prototype.toString.call(test);
	    return objectType === testType;
	};
	var isString = function (test) {
	    return typeof test !== 'string';
	};

	// Is a valid IP
	function isIPv4(ip) {
	    var ip4Regex = '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).' +
	        '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).' +
	        '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).' +
	        '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
	    ip4Regex = new RegExp(ip4Regex);

	    return ip4Regex.test(ip);
	}
	function isIPv6(ip) {
	    var ip6Regex = '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|' +
	        '([0-9a-fA-F]{1,4}:){1,7}:|' +
	        '([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|' +
	        '([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|' +
	        '([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|' +
	        '([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|' +
	        '([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|' +
	        '[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|' +
	        ':((:[0-9a-fA-F]{1,4}){1,7}|:)|' +
	        'fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|' +
	        '::(ffff(:0{1,4}){0,1}:){0,1}' +
	        '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}' +
	        '(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|' +
	        '([0-9a-fA-F]{1,4}:){1,4}:' +
	        '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}' +
	        '(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))';
	    ip6Regex = new RegExp(ip6Regex);

	    return ip6Regex.test(ip);
	}

	// Get the heighest/lowest value in an int array
	var maxVal = function (array) {
	    var a;
	    var max = 0;
	    for (a in array) {
	        if ({}.hasOwnProperty.call(array, a) && array[a] > max) {
	            max = array[a];
	        }
	    }

	    return max;
	};
	var minVal = function (array) {
	    var a;
	    var min = array[Object.keys(array)[0]].length;

	    for (a in array) {
	        if ({}.hasOwnProperty.call(array, a) && min > array[a]) {
	            min = array[a];
	        }
	    }

	    return min;
	};

	// Get the longest/shortest
	var maxLen = function (array) {
	    var a;
	    var max = 0;
	    for (a in array) {
	        if ({}.hasOwnProperty.call(array, a)) {
	            max = (array[a].length < max) ? max : array[a].length;
	        }
	    }

	    return max;
	};
	var minLen = function (array) {
	    var a;
	    var min = array[Object.keys(array)[0]].length;

	    for (a in array) {
	        if ({}.hasOwnProperty.call(array, a)) {
	            min = (array[a].length > min) ? min : array[a].length;
	        }
	    }

	    return min;
	};

	module.exports = {
	    compareObjects: compareObjectsSimple,
	    compareObjectsComplex: compareObjectsComplex,
	    compareObjectsSimple: compareObjectsSimple,
	    isArr: isArray,
	    isArray: isArray,
	    isDef: isDefined,
	    isDefined: isDefined,
	    isFunc: isFunction,
	    isFunction: isFunction,
	    isNull: isNull,
	    isNum: isNumber,
	    isNumber: isNumber,
	    isObj: isObject,
	    isObject: isObject,
	    isStr: isString,
	    isString: isString,
	    isIP: isIPv4,
	    isIPv4: isIPv4,
	    isIPv6: isIPv6,
	    maxVal: maxVal,
	    minVal: minVal,
	    maxLen: maxLen,
	    minLen: minLen
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	// Random Range Derangements are disscussed here
	// http://epubs.siam.org/doi/pdf/10.1137/1.9781611972986.7

	// Derange implimentation by Paul Draper
	// http://stackoverflow.com/users/1212596/paul-draper
	var derangePD = function (array) {
	    function derangementNumber(n) {
	        if (n === 0) {
	            return 1;
	        }
	        var factorial = 1;
	        while (n) {
	            factorial *= n--;
	        }
	        return Math.floor(factorial / Math.E);
	    }
	    array = array.slice();
	    var mark = array.map(function () {
	        return false;
	    });
	    function markMap(_, i) {
	        return i;
	    }
	    for (var i = array.length - 1, u = array.length - 1; u > 0; i--) {
	        if (!mark[i]) {
	            var unmarked = mark.map(markMap).filter(function (j) {
	                return !mark[j] && j < i;
	            });
	            var j = unmarked[Math.floor(Math.random() * unmarked.length)];

	            var tmp = array[j];
	            array[j] = array[i];
	            array[i] = tmp;

	            // this introduces the unbiased random characteristic
	            if (Math.random() < u * derangementNumber(u - 1) / derangementNumber(u + 1)) {
	                mark[j] = true;
	                u--;
	            }
	            u--;
	        }
	    }
	    return array;
	};

	// Derange implimentation by RobG
	// http://stackoverflow.com/users/257182/robg
	var derangeRG = function (arr) {
	    // Make a copy of arr
	    var c = arr.slice();

	    // If arr.length is < 2, return copy
	    if (c.length < 2) {
	        return c;
	    }

	    var result = [];
	    var idx;
	    var i;
	    var iLen;

	    // Keep track of whether last member has been moved
	    var lastMoved = false;

	    // Randomly remove a member of c, with conditions...
	    for (i = 0, iLen = c.length - 1; i < iLen; i++) {
	        // If get down to final two and last hasn't been moved,
	        // swap last two and append to result
	        if (c.length === 2 && !lastMoved) {
	            result = result.concat(c.reverse().splice(0, 2));
	            break;
	        }

	        // Otherwise, select a remaining member of c
	        do {
	            idx = Math.random() * c.length | 0;

	        // But make sure it's not going back in the same place
	        } while (arr.indexOf(c[idx]) === result.length);

	        // Add member to result
	        result.push(c.splice(idx, 1)[0]);

	        // Remember if last was just moved
	        lastMoved = lastMoved || idx === c.length;
	    }

	    // Add the last member, saves a do..while iteration about half the time
	    if (c.length === 0) {
	        result.push(c[0]);
	    }
	    return result;
	};

	// The following shuffle functions are from Mkie Bostock
	// https://bost.ocks.org/mike/shuffle/
	var decreasingDeck = function (array) {
	    array = array.slice();

	    var copy = [];
	    var n = array.length;
	    var i;

	    // While there remain elements to shuffle…
	    while (n) {
	        // Pick a remaining element…
	        i = Math.floor(Math.random() * n--);
	        // And move it to the new array.
	        copy.push(array.splice(i, 1)[0]);
	    }

	    return copy;
	};

	var randomElement = function (array) {
	    array = array.slice();

	    var copy = [];
	    var n = array.length;
	    var i;

	    // While there remain elements to shuffle…
	    while (n) {
	        // Pick a remaining element…
	        i = Math.floor(Math.random() * array.length);

	        // If not already shuffled, move it to the new array.
	        if (i in array) {
	            copy.push(array[i]);
	            delete array[i];
	            n--;
	        }
	    }

	    return copy;
	};

	var knuth = function (array) {
	    array = array.slice();

	    var m = array.length;
	    var t;
	    var i;

	    // While there remain elements to shuffle…
	    while (m) {
	        // Pick a remaining element…
	        i = Math.floor(Math.random() * m--);

	        // And swap it with the current element.
	        t = array[m];
	        array[m] = array[i];
	        array[i] = t;
	    }

	    return array;
	};

	module.exports = {
	    decreasingDeck: decreasingDeck,
	    derange: derangePD,
	    derangePD: derangePD,
	    derangeRG: derangeRG,
	    fisherYates: knuth,
	    knuth: knuth,
	    randomElement: randomElement
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The maths module of belt.js
	 * @module maths
	 */

	'use strict';

	var comp = __webpack_require__(1);

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
	 * Calculate the Sum of 'points'
	 * @param  {Array} points An array of points to get the Sum of.
	 * @return {Number}       The Sum of the points
	 */
	var sum = function (points) {
	    var total = 0;
	    var a;
	    if (comp.isArray(points)) {
	        for (a = 0; a < points.length; a++) {
	            total += sum(points[a]);
	        }
	    } else if (comp.isNumber(points)) {
	        total += points;
	    } else {
	        total = false;
	    }
	    return total;
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
	 * Calculate the Mean of 'points'
	 * @param  {Array} points An array of points to get the Mean of.
	 * @return {Number}       The Mean of the points
	 */
	var mean = function (points) {
	    var mean = sum(points);
	    mean /= points.length;
	    return mean;
	};
	/**
	 * Calculate the Standard Deviation of 'points'
	 * @param  {Array} points   An array of points to get the Standard Deviation of.
	 * @param  {Boolean} sample Is this a sample of the population
	 * @return {Number}         The Standard Deviation of the points
	 */
	var standardDeviation = function (points, sample) {
	    var m = mean(points);
	    var stdDev = 0;
	    var a;
	    if (comp.isArray(points)) {
	        for (a = 0; a < points.length; a++) {
	            stdDev += Math.pow(points[a] - m, 2);
	        }
	        stdDev /= points.length - (sample === true ? 1 : 0);
	        stdDev = Math.pow(stdDev, 0.5);
	    }
	    return stdDev;
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
	var pythag = function (x, y) {
	    x = Math.pow(x, 2);
	    y = Math.pow(y, 2);
	    return Math.pow(x + y, 0.5);
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
	    sum: sum,
	    mean: mean,
	    productSum: productSum,
	    standardDeviation: standardDeviation,
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var comp = __webpack_require__(1);

	var isDef = comp.isDef;
	var random = function (min, max) {
	    min = isDef(max) ? min : 0;
	    max = isDef(max) ? max : isDef(min) ? min : 1;
	    return (Math.random() * (max - min)) + min;
	};
	var randomInt = function (max, min) {
	    max = isDef(max) ? Math.round(max) : 1;
	    min = isDef(min) ? Math.round(min) : 0;

	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var randomArray = function (size, depth, min, max) {
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


/***/ }
/******/ ]);