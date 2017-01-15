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
	var generator = __webpack_require__(2);
	var maths = __webpack_require__(3);
	var physics = __webpack_require__(6);
	var search = __webpack_require__(7);
	var shuffle = __webpack_require__(8);
	var stats = __webpack_require__(4);
	var util = __webpack_require__(5);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Compare Objects
	var objectsComplex = function (o, p) {
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
	            // if (objectsComplex(o[keysO[i]], p[keysO[i]] === false) return false
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
	            } else if (objectsComplex(o[keysO[i]], p[keysO[i]]) === false) {
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
	var objectsSimple = function (o, p) {
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
	    var arrayType = Object.prototype.toString.call(3);
	    var testType = Object.prototype.toString.call(test);
	    return arrayType === testType;
	};
	var isObject = function (test) {
	    var objectType = Object.prototype.toString.call({});
	    var testType = Object.prototype.toString.call(test);
	    return objectType === testType;
	};
	var isString = function (test) {
	    return typeof test === 'string';
	};
	var sameType = function (type, test) {
	    var types = {
	        bool: '[object Boolean]',
	        boolean: '[object Boolean]',
	        object: '[object Object]',
	        func: '[object Function]',
	        function: '[object Function]',
	        number: '[object Number]',
	        int: '[object Number]',
	        integer: '[object Number]',
	        float: '[object Number]',
	        string: '[object String]',
	        str: '[object String]',
	        array: '[object Array]',
	        null: '[object Null]',
	        undefined: '[object Undefined]'
	    };
	    if (isString(type)) {
	        type = type.toLowerCase();
	        type = isDefined(types[type]) ? types[type] : '[object String]';
	    } else {
	        type = Object.prototype.toString.call(type);
	    }

	    return type === Object.prototype.toString.call(test);
	};

	module.exports = {
	    objects: objectsSimple,
	    objectsComplex: objectsComplex,
	    objectsSimple: objectsSimple,
	    sameType: sameType,
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
	    isString: isString
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The generation module of belt.js
	 * @module generator
	 */

	'use strict';

	var isDef = __webpack_require__(1).isDef;

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
	 * Generates a random string of length 'length' using 'letters'
	 * @param {Number} min  The minimum number
	 * @param {Number} max  The maximum number
	 * @return {Number}     The random integer
	* */
	var randomString = function (length, letters) {
	    var a;
	    var text = '';
	    length = length || 8;
	    letters = letters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	    for (a = 0; a < length; a++) {
	        text += letters[Math.floor(Math.random() * letters.length)];
	    }

	    return text;
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
	    randString: randomString,
	    random: random,
	    randomArray: randomArray,
	    randomInt: randomInt,
	    randomString: randomString
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
	var stats = __webpack_require__(4);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The statistic module of belt.js
	 * @module stats
	 */

	'use strict';

	var comp = __webpack_require__(1);
	var util = __webpack_require__(5);

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
	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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

	    f.add = function (e) {
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

	    util.forAll(h, function (e, l) {
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

	    util.forAll(array, function (e) {
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
	    util.forAll(array, function (e) {
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

	    util.forAll(array, function (e) {
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The utility module of belt.js
	 * @module util
	 */

	'use strict';

	var comp = __webpack_require__(1);

	/**
	 * Dissasociates init from return
	 * @param {Array} init The element to dissasociate
	 * @returns {Array}    The dissasociated element
	* */
	var diss = function (init) {
	    var clone = [];
	    var a;

	    for (a in init) {
	        if ({}.hasOwnProperty.call(init, a)) {
	            if (comp.isArray(init[a])) {
	                clone[a] = diss(init[a]);
	            } else {
	                clone[a] = init[a];
	            }
	        }
	    }

	    return clone;
	};
	/**
	 * Calls 'func(element)' for every element in 'array'
	 * @param {Array} array    The array of things to iterate through
	 * @param {Function} func  The 'callback' for every element
	* */
	var forAll = function (array, func, objects, loc) {
	    var a;
	    loc = comp.isDef(loc) ? loc : [];
	    if (comp.isArray(array) || (objects === true && comp.isObject(array))) {
	        array = diss(array);
	        for (a in array) {
	            if ({}.hasOwnProperty.call(array, a)) {
	                array[a] = forAll(array[a], func, objects, loc.concat(a));
	            }
	        }
	    } else {
	        array = func(array, loc);
	    }
	    return array;
	};

	/**
	 * Gets the very first element in an n-dimentional 'array'
	 * @param {Array} array   The array
	 * @param {Bool} objects  Should the function search objects as well
	* */
	var first = function (array, objects) {
	    var out;
	    if ((
	        comp.isArray(array) ||
	        (objects === true && comp.isObject(array))
	    ) && Object.keys(array).length > 0) {
	        out = first(array[Object.keys(array)[0]], objects);
	    } else {
	        out = array;
	    }
	    return out;
	};
	var count = function (array, objects, type) {
	    var c = 0;
	    type = comp.isDef(type) ? type : '#';

	    forAll(array, function (e) {
	        if (type === '#' || comp.sameType(type, e)) {
	            c++;
	        }
	    }, objects);

	    return c++;
	};

	module.exports = {
	    diss: diss,
	    forAll: forAll,
	    first: first,
	    count: count
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// var comp = require('./compare');

	// Circular collisions


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var comp = __webpack_require__(1);

	// Extracting bits from a byte
	var bitExtraction = function (input, offset, length, intLen) {
	    var c = 0;
	    var a;

	    intLen = comp.isDef(intLen) ? intLen : (Math.ceil(input.toString(2).length / 8) * 8);
	    length = comp.isDef(length) ? length : 1;
	    offset = comp.isDef(offset) ? offset : 0;

	    for (a = 0; a < length; a++) {
	        c = (c << 1) | 1;
	    }

	    offset = intLen - offset - c.toString(2).length;

	    return (input & (c << offset)) >> offset;
	};

	var indexOf = function (array, find) {
	    var i;
	    // Confirm that the array exists and it is an array
	    if (array === 'undefined' || !comp.isArr(array)) {
	        return false;
	    }
	    // Search the array
	    for (i = 0; i < array.length; i++) {
	        // If it is what you are looking for return the position
	        if (array[i] === find) {
	            return i;
	        }
	    }
	    // If it is not found return -1
	    return -1;
	};

	module.exports = {
	    bitExtraction: bitExtraction,
	    indexOf: indexOf
	};


/***/ },
/* 8 */
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


/***/ }
/******/ ]);