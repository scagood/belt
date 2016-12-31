'use strict';
import test from 'ava';

var comp = require('../').compare;

var arrays = [
    {},
    {a: 1},
    {a: 1, b: 2},
    {a: {}, b: 2},
    {a: {a: 1}, b: 2},
    {a: {a: 1, b: 2}, c: 2}
];
test('Compare Objects Complex', t => {
    var a;
    for (a = 0; a < arrays.length; a++) {
        t.is(comp.objectsComplex(arrays[a], arrays[a]), true);
    }
    for (a = 0; a < arrays.length; a++) {
        t.is(comp.objectsComplex(arrays[a], arrays[arrays.length - 1 - a]), a === arrays.length - 1 - a);
    }
});
test('Compare Objects Simple', t => {
    var a;
    for (a = 0; a < arrays.length; a++) {
        t.is(comp.objectsSimple(arrays[a], arrays[a]), true);
    }
    for (a = 0; a < arrays.length; a++) {
        t.is(comp.objectsSimple(arrays[a], arrays[arrays.length - 1 - a]), a === arrays.length - 1 - a);
    }
});

var types = {
    bool: false,
    object: {},
    function: () => {},
    number: 0,
    string: '',
    array: [],
    null: null,
    undefined: undefined
};

test('isArray(test)', t => {
    t.is(comp.isArray(types.bool), false);
    t.is(comp.isArray(types.object), false);
    t.is(comp.isArray(types.function), false);
    t.is(comp.isArray(types.number), false);
    t.is(comp.isArray(types.string), false);
    t.is(comp.isArray(types.array), true);
    t.is(comp.isArray(types.null), false);
    t.is(comp.isArray(types.undefined), false);
});
test('isDefined(test)', t => {
    t.is(comp.isDefined(types.bool), true);
    t.is(comp.isDefined(types.object), true);
    t.is(comp.isDefined(types.function), true);
    t.is(comp.isDefined(types.number), true);
    t.is(comp.isDefined(types.string), true);
    t.is(comp.isDefined(types.array), true);
    t.is(comp.isDefined(types.null), true);
    t.is(comp.isDefined(types.undefined), false);
});
test('isFunction(test)', t => {
    t.is(comp.isFunction(types.bool), false);
    t.is(comp.isFunction(types.object), false);
    t.is(comp.isFunction(types.function), true);
    t.is(comp.isFunction(types.number), false);
    t.is(comp.isFunction(types.string), false);
    t.is(comp.isFunction(types.array), false);
    t.is(comp.isFunction(types.null), false);
    t.is(comp.isFunction(types.undefined), false);
});
test('isNull(test)', t => {
    t.is(comp.isNull(types.bool), false);
    t.is(comp.isNull(types.object), false);
    t.is(comp.isNull(types.function), false);
    t.is(comp.isNull(types.number), false);
    t.is(comp.isNull(types.string), false);
    t.is(comp.isNull(types.array), false);
    t.is(comp.isNull(types.null), true);
    t.is(comp.isNull(types.undefined), false);
});
test('isNumber(test)', t => {
    t.is(comp.isNumber(types.bool), false);
    t.is(comp.isNumber(types.object), false);
    t.is(comp.isNumber(types.function), false);
    t.is(comp.isNumber(types.number), true);
    t.is(comp.isNumber(types.string), false);
    t.is(comp.isNumber(types.array), false);
    t.is(comp.isNumber(types.null), false);
    t.is(comp.isNumber(types.undefined), false);
});
test('isObject(test)', t => {
    t.is(comp.isObject(types.bool), false);
    t.is(comp.isObject(types.object), true);
    t.is(comp.isObject(types.function), false);
    t.is(comp.isObject(types.number), false);
    t.is(comp.isObject(types.string), false);
    t.is(comp.isObject(types.array), false);
    t.is(comp.isObject(types.null), false);
    t.is(comp.isObject(types.undefined), false);
});
test('isString(test)', t => {
    t.is(comp.isString(types.bool), false);
    t.is(comp.isString(types.object), false);
    t.is(comp.isString(types.function), false);
    t.is(comp.isString(types.number), false);
    t.is(comp.isString(types.string), true);
    t.is(comp.isString(types.array), false);
    t.is(comp.isString(types.null), false);
    t.is(comp.isString(types.undefined), false);
});
test('sameType(type, test)', t => {
    var a;
    var b;
    for (a in types) {
        if ({}.hasOwnProperty.call(types, a)) {
            for (b in types) {
                if ({}.hasOwnProperty.call(types, b)) {
                    t.is(a === b, comp.sameType(types[a], types[b]));
                }
            }
        }
    }
});
