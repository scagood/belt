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
