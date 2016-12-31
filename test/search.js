'use strict';
import test from 'ava';

var search = require('../').search;

test('bitExtraction(input, offset, length, intLen)', t => {
    t.is(search.bitExtraction(51, 0, 1), 0);
    t.is(search.bitExtraction(51, 1, 1), 0);
    t.is(search.bitExtraction(51, 2, 2), 3);
    t.is(search.bitExtraction(51, 3, 1), 1);
    t.is(search.bitExtraction(51, 4, 4), 3);
    t.is(search.bitExtraction(51, 5, 1), 0);
    t.is(search.bitExtraction(51, 6, 1), 1);
    t.is(search.bitExtraction(51, 7, 1), 1);
});
test('indexOf(array, find)', t => {
    t.is(search.indexOf([1, 2, 3], 4), -1);
    t.is(search.indexOf([1, 2, 3], 2), 1);
    t.is(search.indexOf([1, [4, 5], 3], 4), -1);
});
