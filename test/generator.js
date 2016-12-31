'use strict';
import test from 'ava';

var gen = require('../').generator;

test('Random floats', t => {
    var a;
    var max = 100;
    var min = 0;
    var temp;
    for (a = 0; a < 1000; a++) {
        temp = gen.random(min, max);
        t.is(temp >= min, true);
        t.is(temp <= max, true);
    }
});
test('Random ints', t => {
    var a;
    var max = 100;
    var min = 0;
    var temp;
    for (a = 0; a < 1000; a++) {
        temp = gen.randomInt(min, max);
        t.is(temp >= min, true);
        t.is(temp <= max, true);
        t.is(Math.floor(temp), temp);
    }
});
test('Random int array', t => {
    var a;
    var max = 100;
    var min = 0;
    var randx;
    var randy;
    var temp;

    var x;
    var y;

    for (a = 0; a < 1000; a++) {
        temp = gen.randomArray(1, 1, max, min);
        t.is(temp[0][0] >= min, true);
        t.is(temp[0][0] <= max, true);
        t.is(Math.floor(temp[0][0]), temp[0][0]);
    }
    for (a = 0; a < 100; a++) {
        randx = gen.randomInt(20, 10);
        randy = gen.randomInt(20, 10);
        temp = gen.randArray(randx, randy, max, min);

        for (x = 0; x < randx; x++) {
            t.is(temp.length, randx);
            for (y = 0; y < randy; y++) {
                t.is(temp[x].length, randy);
                t.is(temp[x][y] >= min, true);
                t.is(temp[x][y] <= max, true);
            }
        }
    }
});
