'use strict';
import test from 'ava';

var shuffle = require('../').shuffle;
var gen = require('../').generator;

function testShuffle(input, alg, t) {
    var output = alg(input);

    t.is(input.length, output.length);
    t.notDeepEqual(input, output);
    t.deepEqual(input.sort(), output.sort());
}
function testDerange(input, alg, t) {
    var output = alg(input);
    var a;
    for (a = 0; a < input.length; a++) {
        t.is(input[a] === output[a], false);
    }
}

test('derangePD(array)', t => {
    testDerange([1, 2, 3, 4], shuffle.derangePD, t);
    var a;
    for (a = 0; a < 10; a++) {
        testDerange(gen.randArray(10, 10, 100, 0), shuffle.derangePD, t);
    }
});
test('derangeRG(array)', t => {
    testDerange([1, 2, 3, 4], shuffle.derangePD, t);
    var a;
    for (a = 0; a < 10; a++) {
        testDerange(gen.randArray(10, 10, 100, 0), shuffle.derangeRG, t);
    }
});

test('decreasingDeck(array)', t => {
    testShuffle([1, 2, 3, 4], shuffle.decreasingDeck, t);
    var a;
    for (a = 0; a < 10; a++) {
        testShuffle(gen.randArray(10, 10, 100, 0), shuffle.decreasingDeck, t);
    }
});
test('randomElement(array)', t => {
    testShuffle([1, 2, 3, 4], shuffle.randomElement, t);
    var a;
    for (a = 0; a < 10; a++) {
        testShuffle(gen.randArray(10, 10, 100, 0), shuffle.randomElement, t);
    }
});
test('knuth(array)', t => {
    testShuffle([1, 2, 3, 4], shuffle.knuth, t);
    var a;
    for (a = 0; a < 10; a++) {
        testShuffle(gen.randArray(10, 10, 100, 0), shuffle.knuth, t);
    }
});
