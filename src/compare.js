var isObject = function (test) {
    var objectType = Object.prototype.toString.call({});
    var testType = Object.prototype.toString.call(test);
    return objectType === testType;
};
var isArray = function (test) {
    var arrayType = Object.prototype.toString.call([]);
    var testType = Object.prototype.toString.call(test);
    return arrayType === testType;
};
var isNumber = function (test) {
    return !isNaN(test);
};
var isDef = function (type) {
    return typeof type !== 'undefined';
};

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

module.exports = {
    compareObjectsComplex: compareObjectsComplex,
    isArray: isArray,
    isDef: isDef,
    isNumber: isNumber,
    isObject: isObject
};
