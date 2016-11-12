var comp = require('./compare');

var isDef = comp.isDef;
var map = function (old, fMin, fMax, tMin, tMax) {
    return ((old - fMin) * (tMax - tMin) / (fMax - fMin)) + tMin;
};
var probMap = function (old, low, high, prob) {
    low = isDef(low) ? low : 0;
    high = isDef(high) ? high : 1;
    prob = isDef(prob) ? prob : 1;
    var res;
    if (old < (0.5 - (prob / 2))) {
        res = map(old, 0, (0.5 - (prob / 2)), 0, low);
    } else if (old > (0.5 - (prob / 2)) && old < (0.5 + (prob / 2))) {
        res = map(old, (0.5 - (prob / 2)), (0.5 + (prob / 2)), low, high);
    } else if (old > (0.5 + (prob / 2))) {
        res = map(old, (0.5 + (prob / 2)), 1, high, 1);
    } else {
        res = false;
    }
    return res;
};
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
var minLen = function (array) {
    var a;
    var min = array[Object.keys(array)[0]].length;

    for (a in array) {
        if ({}.hasOwnProperty.call(array, a) && min > array[a].length) {
            min = array[a].length;
        }
    }

    return min;
};
var maxLen = function (array) {
    var a;
    var max = 0;
    for (a in array) {
        if ({}.hasOwnProperty.call(array, a) && array[a].length > max) {
            max = array[a].length;
        }
    }

    return max;
};

module.exports = {
    map: map,
    maxLen: maxLen,
    minLen: minLen,
    moveToBounds: moveToBounds,
    probMap: probMap
};
