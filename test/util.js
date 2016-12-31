'use strict';
import test from 'ava';

var util = require('../').util;
var gen = require('../').generator;

/* Max & Min Length tests
 * var Q = [
 *     [
 *         [525,738],
 *         [272,547,533],
 *         [698,374,61],
 *         [698,374,61],
 *         [698,374,61],
 *         [698,374,61],
 *         [698,374,61]
 *     ], [
 *         [525,588,738],
 *         [547,533],
 *         [698,[123,3],272,61,3,3,45,1,5,247,23,45,23,42,4,1]
 *     ], [
 *         [525,588,738],
 *         [272,547,533]
 *     ]
 * ];
 *
 * console.log(maxLength(Q, 3)); null
 * console.log(minLength(Q, 3)); null
 * console.log(maxLength(Q, 2)); 2
 * console.log(minLength(Q, 2)); 2
 * console.log(maxLength(Q, 1)); 16
 * console.log(minLength(Q, 1)); 2
 * console.log(maxLength(Q, 0)); 7
 * console.log(minLength(Q, 0)); 2
 * console.log(maxLength(Q));    7
 * console.log(minLength(Q));    2
* */
var Q = [
    [
        {a: 525, b: 738},
        [272, 547, 533],
        [698, 374, 61],
        [698, 374, 61],
        [698, 374, 61],
        [698, 374, 61],
        [698, 374, 61]
    ], [
        [525, 588, 738],
        [547, 533],
        [698, [123, 3], 272, 61, 3, 3, 45, 1, 5, 247, 23, 45, 23, 42, 4, 1]
    ], [
        [525, 588, 738],
        [272, 547, 533]
    ]
];

test('forAll in array non objects', t => {
    var a;
    var count;
    var array;
    for (a = 0; a < 10; a++) {
        array = gen.randArray(3, 3, 100, 0);
        count = 0;
        util.forAll(array, (e, l) => {
            t.is(array[l[0]][l[1]], e);
            count++;
        }, false);
        t.is(count, 9);
    }
});

test('first in array non objects', t => {
    var a;
    var array;
    for (a = 0; a < 10; a++) {
        array = gen.randArray(3, 3, 100, 0);
        t.is(array[0][0], util.first(array, false, 2));
    }
    t.deepEqual(util.first(Q, false), {a: 525, b: 738});
});
test('first in array including objects', t => {
    t.is(util.first(Q, true, 2), 525);
});

test('count numbers in array', t => {
    var a;
    var randx;
    var randy;
    var array;
    for (a = 0; a < 10; a++) {
        randx = gen.randomInt(100, 10);
        randy = gen.randomInt(100, 10);
        array = gen.randArray(randx, randy, 100, 0);

        t.is(util.count(array, false, 'number'), randx * randy);
    }
});
test('count numbers in Q', t => {
    t.is(util.count(Q, false, {}), 1);
    t.is(util.count(Q, false, 'number'), 46);
    t.is(util.count(Q, true, 'number'), 48);
});
