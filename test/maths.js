'use strict';
import test from 'ava';

var math = require('../').math;
var gen = require('../').gen;

// Map tests
test('Map performs within bounds', t => {
    var fMin = 0;
    var fMax = 1;
    var tMin = 0;
    var tMax = 10;

    var a;
    var out;
    for (a = 0; a < 10; a++) {
        out = math.map(a / tMax, fMin, fMax, tMin, tMax);
        t.is(out, a);
    }
});
test('Map performs outside bounds', t => {
    var fMin = 0;
    var fMax = 1;
    var tMin = 0;
    var tMax = 10;

    var a;
    var out;
    for (a = -10; a < 20; a++) {
        out = math.map(a / tMax, fMin, fMax, tMin, tMax);
        t.is(out, a);
    }
});
test('Map performs non zero', t => {
    var fMin = 2;
    var fMax = 1;
    var tMin = 0;
    var tMax = 10;

    t.is(math.map(1, fMin, fMax, tMin, tMax), 10);
    t.is(math.map(2, fMin, fMax, tMin, tMax), 0);
    t.is(math.map(1.5, fMin, fMax, tMin, tMax), 5);
    t.is(math.map(0.5, fMin, fMax, tMin, tMax), 15);
    t.is(math.map(2.5, fMin, fMax, tMin, tMax), -5);
});

test('Probability mapping within bounds', t => {
    var low = 0;
    var high = 1;
    var prob = 1;
    var a;
    var b = 100;

    for (a = 0; a < b; a++) {
        t.is(math.probMap(a / b, low, high, prob), a / b);
    }
});
test('Probability mapping out of bounds', t => {
    var low = 0.6;
    var high = 0.9;
    var prob = 0.5;

    t.is(math.probMap(-0.1, low, high, prob), false);
    t.is(math.probMap(1.1, low, high, prob), false);
});

// var moveToBounds = function (old, min, max) {};

test('Round to n decimal place', t => {
    var a;
    var b = 100;
    var temp;
    var p = 3;
    for (a = 0; a < b; a++) {
        temp = gen.random(0, 10000);
        temp = math.roundDP(temp, p).toString().split('.');
        temp = typeof temp[1] === 'undefined' ? 0 : temp[1].length;
        t.true(temp <= p);
    }
});
test('Round to n significant figures', t => {
    var a;
    var b = 10;
    var num;
    var temp;
    var p = 3;

    for (a = 0; a < b; a++) {
        num = gen.random(0, 10);

        temp = math.roundSF(num, p).toString();
        // Leave only significant figures.
        temp = temp.replace(/(?:^0+)|\.|(?:0+$)/g, '');
        temp = temp.trim('0');

        t.true(temp.length <= p);
    }
});

test('Single dimention product sum', t => {
    t.is(math.productSum([1, 1, 1], [1, 1, 1]), 3);
    t.is(math.productSum([1, 2, 1], [1, 1, 1]), 4);
    t.is(math.productSum(
        [0.803662, 0.981136, 0.369132, 0.498354, 0.067417, 0.422276],
        [0.193649, 0.519878, 0.563662, 0.385040, 0.395856, 0.553702]
    ), 1.326153759294);
    t.is(math.productSum(
        [0.807844, 0.065858, 0.878722, 0.467325, 0.743167, 0.179488],
        [0.080759, 0.547340, 0.385102, 0.297765, 0.033439, 0.389591]
    ), 0.673615690306);
    t.is(math.productSum(
        [0.852762, 0.233002, 0.854950, 0.393176, 0.153687, 0.331072],
        [0.990439, 0.024766, 0.840315, 0.781559, 0.989145, 0.590250]
    ), 2.223530796299);
});
test('Multi dimention product sum', t => {
    t.is(math.productSum([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]), 9);
    t.is(math.productSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]), 45);
    t.is(math.productSum([
        [0.803662, 0.981136, 0.369132, 0.498354, 0.067417, 0.422276],
        [0.193649, 0.519878, 0.563662, 0.385040, 0.395856, 0.553702],
        [0.353233, 0.059994, 0.534671, 0.952161, 0.245603, 0.661871],
        [0.807844, 0.065858, 0.878722, 0.467325, 0.743167, 0.179488],
        [0.080759, 0.547340, 0.385102, 0.297765, 0.033439, 0.389591],
        [0.852762, 0.233002, 0.854950, 0.393176, 0.153687, 0.331072]
    ], [
        [0.990439, 0.024766, 0.840315, 0.781559, 0.989145, 0.590250],
        [0.789280, 0.151726, 0.362757, 0.729702, 0.603019, 0.407630],
        [0.043634, 0.000459, 0.393417, 0.849023, 0.507342, 0.440948],
        [0.157783, 0.039594, 0.636134, 0.853263, 0.446433, 0.816156],
        [0.831422, 0.387378, 0.265973, 0.020566, 0.570112, 0.102036],
        [0.474762, 0.814433, 0.710705, 0.154202, 0.160961, 0.120790]
    ]), 7.808323694585999);
    t.is(math.productSum([
        [0.223385, 0.245726, 0.549084, 0.242753, 0.152291, 0.435995],
        [0.172154, 0.122386, 0.508996, 0.645416, 0.622478, 0.522734],
        [0.359798, 0.052724, 0.060253, 0.499422, 0.733064, 0.267465],
        [0.619274, 0.189138, 0.406118, 0.232300, 0.459636, 0.659042],
        [0.639527, 0.501506, 0.979046, 0.943030, 0.201164, 0.457331],
        [0.208213, 0.910542, 0.953414, 0.671509, 0.290860, 0.865424]
    ], [
        [0.393453, 0.397436, 0.041926, 0.416876, 0.978251, 0.585167],
        [0.352840, 0.019615, 0.162845, 0.642887, 0.602894, 0.904657],
        [0.375133, 0.267069, 0.728082, 0.972202, 0.718709, 0.408076],
        [0.795811, 0.756764, 0.708524, 0.147342, 0.711857, 0.262471],
        [0.047895, 0.712569, 0.955355, 0.568113, 0.128960, 0.860783],
        [0.123399, 0.341165, 0.603489, 0.229249, 0.869332, 0.866295]
    ]), 9.242493383315);
    t.is(math.productSum([
        [0.284762, 0.911175, 0.355780, 0.923674, 0.514343, 0.805962],
        [0.239609, 0.529031, 0.664460, 0.077863, 0.054638, 0.571951],
        [0.289130, 0.853551, 0.338590, 0.175211, 0.321176, 0.231951],
        [0.384724, 0.593798, 0.125148, 0.100025, 0.899154, 0.751918],
        [0.072888, 0.748325, 0.504053, 0.869402, 0.217107, 0.845758],
        [0.542845, 0.895434, 0.427314, 0.508583, 0.329240, 0.844736]
    ], [
        [0.261068, 0.247908, 0.310235, 0.496927, 0.421863, 0.861802],
        [0.174037, 0.174472, 0.186228, 0.405183, 0.047277, 0.374637],
        [0.339091, 0.275485, 0.075566, 0.879784, 0.924691, 0.148136],
        [0.228510, 0.716542, 0.051951, 0.476475, 0.469443, 0.355583],
        [0.183961, 0.427054, 0.455724, 0.374900, 0.841133, 0.666640],
        [0.799760, 0.817405, 0.894587, 0.461287, 0.973770, 0.254942]
    ]), 8.342581834172);
    t.is(math.productSum([
        [0.935059, 0.361923, 0.376521, 0.870782, 0.720704, 0.623521],
        [0.239174, 0.480799, 0.128249, 0.558850, 0.416688, 0.854294],
        [0.754956, 0.935551, 0.719092, 0.983202, 0.522552, 0.389685],
        [0.314488, 0.249691, 0.217221, 0.233531, 0.622024, 0.458223],
        [0.223538, 0.648111, 0.836051, 0.438379, 0.931157, 0.539352],
        [0.243732, 0.592963, 0.281144, 0.710032, 0.456435, 0.183381]
    ], [
        [0.375112, 0.317058, 0.300178, 0.715816, 0.834361, 0.786238],
        [0.918165, 0.973306, 0.894016, 0.915598, 0.784268, 0.261158],
        [0.533211, 0.030133, 0.761857, 0.669567, 0.903450, 0.650101],
        [0.080362, 0.035768, 0.520228, 0.656891, 0.241443, 0.064307],
        [0.911148, 0.234961, 0.039937, 0.564123, 0.923804, 0.402955],
        [0.973098, 0.021951, 0.082281, 0.211596, 0.382424, 0.288476]
    ]), 9.365021572334001);
    t.is(math.productSum([
        [0.876039, 0.744887, 0.320407, 0.062180, 0.099638, 0.142883],
        [0.376623, 0.626677, 0.985422, 0.909054, 0.888558, 0.398365],
        [0.574573, 0.846339, 0.945846, 0.682427, 0.599739, 0.956209],
        [0.786247, 0.053099, 0.533208, 0.766231, 0.548241, 0.918907],
        [0.461483, 0.344937, 0.701807, 0.119315, 0.633302, 0.325637],
        [0.814071, 0.036110, 0.067975, 0.842754, 0.323406, 0.079325]
    ], [
        [0.527008, 0.550103, 0.349809, 0.413335, 0.027296, 0.597245],
        [0.652070, 0.741972, 0.582953, 0.318411, 0.645327, 0.106631],
        [0.187356, 0.191903, 0.008367, 0.643230, 0.339159, 0.184464],
        [0.079870, 0.919444, 0.646218, 0.894233, 0.914141, 0.028425],
        [0.616206, 0.416541, 0.425010, 0.421611, 0.463417, 0.768652],
        [0.863313, 0.368604, 0.703122, 0.188429, 0.295814, 0.358591]
    ]), 8.420263780803001);
});

test.todo('gaussianDistribution(coords, stdDev)');
test.todo('pythag(x, y)');
test.todo('toDegrees(angle)');
test.todo('toRadians(angle)');
test.todo('distance(x1, y1, x2, y2)');
test.todo('angle(x1, y1, x2, y2)');
test.todo('toPolar(x, y)');
test.todo('toCartesian(r, theta, radians)');
test.todo('cosineRuleLength(a, b, C)');
test.todo('cosineRuleAngle(a, b, c)');
test.todo('sineRuleLength(a, A, B)');
test.todo('sineRuleAngle(a, A, b)');
