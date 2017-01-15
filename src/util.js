/**
 * The utility module of belt.js
 * @module util
 */

'use strict';

var comp = require('./compare');

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
