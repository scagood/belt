'use strict';
import test from 'ava';

var stats = require('../').stats;

test('Sum numbers in an array', t => {
    t.is(stats.sum([1, 2, 3, 4, 5, 6]), 21);
    t.is(stats.sum([18, 84, 68, 161, 68, 1]), 400);
    t.is(stats.sum([165, 5648, 0, 687, 1, 8, 4, 6]), 6519);
    t.is(stats.sum([6844, 984987, 357, 9, 198, 0.58, 5.684]), 992401.264);
    t.is(stats.sum([0.803662, 0.981136, 0.369132, 0.498354, 0.067417, 0.422276]), 3.141977);
});
test('Multi dimention sum', t => {
    t.is(stats.sum([[
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]]), 18);
    t.is(stats.sum([[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]]), 54);
    t.is(stats.sum([[
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
    ]]), 33.31445999999999);
    t.is(stats.sum([[
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
    ]]), 35.260689);
    t.is(stats.sum([[
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
    ]]), 33.857366);
    t.is(stats.sum([[
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
    ]]), 37.310401000000006);
    t.is(stats.sum([[
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
    ]]), 35.83020099999999);
});

test('Calculate mean', t => {
    t.is(stats.mean([1, 1, 1]), 1);
    t.is(stats.mean([1, 2, 3]), 2);
    t.is(stats.mean([0.5, 1.5]), 1);
    t.is(stats.mean([0.889520, 0.042144, 0.113395, 0.890859, 0.336715, 0.608866]), 0.4802498333333333);
    t.is(stats.mean([0.067317, 0.804039, 0.686859, 0.957869, 0.572379, 0.351743]), 0.5733676666666666);
    t.is(stats.mean([0.379507, 0.358194, 0.466072, 0.945494, 0.377742, 0.598394]), 0.5209005);
    t.is(stats.mean([0.960061, 0.947917, 0.195644, 0.858921, 0.430809, 0.385005]), 0.6297261666666667);
    t.is(stats.mean([0.962196, 0.531673, 0.469229, 0.669506, 0.739490, 0.576841]), 0.6581558333333334);
    t.is(stats.mean([0.110768, 0.192788, 0.903153, 0.033028, 0.634472, 0.516733]), 0.39849033333333334);
    t.is(stats.mean([0.293291, 0.832718, 0.910606, 0.254581, 0.880108, 0.080404]), 0.5419513333333333);
    t.is(stats.mean([0.147728, 0.150743, 0.787755, 0.277249, 0.340336, 0.298740]), 0.3337585);
    t.is(stats.mean([0.325505, 0.613098, 0.785858, 0.516854, 0.274867, 0.373144]), 0.48155433333333336);
    t.is(stats.mean([0.040602, 0.951995, 0.433059, 0.733258, 0.805332, 0.771230]), 0.6225793333333334);
});

test('Calculate Population Standard Deviation', t => {
    t.is(stats.standardDeviation([1, 1, 1]), 0);
    t.is(stats.standardDeviation([1, 2, 3]), 0.816496580927726);
    t.is(stats.standardDeviation([0.5, 1.5]), 0.5);
    t.is(stats.standardDeviation([0.039160, 0.479928, 0.172736, 0.280229, 0.951001, 0.509840]), 0.2938465020633883);
    t.is(stats.standardDeviation([0.135651, 0.721946, 0.068511, 0.801846, 0.910453, 0.277919]), 0.3356408625329891);
    t.is(stats.standardDeviation([0.243493, 0.726105, 0.433715, 0.177424, 0.705072, 0.686156]), 0.2243308111760769);
    t.is(stats.standardDeviation([0.666985, 0.613706, 0.727950, 0.137046, 0.218014, 0.673549]), 0.23590745094115947);
    t.is(stats.standardDeviation([0.039838, 0.961914, 0.128555, 0.942817, 0.913701, 0.552287]), 0.3839735341357092);
    t.is(stats.standardDeviation([0.319472, 0.936252, 0.020962, 0.614555, 0.712406, 0.734566]), 0.30182204048104055);
    t.is(stats.standardDeviation([0.853676, 0.861009, 0.809062, 0.191420, 0.149629, 0.251733]), 0.3235965389847621);
    t.is(stats.standardDeviation([0.413456, 0.539293, 0.690883, 0.751103, 0.274134, 0.204435]), 0.20175135130815522);
    t.is(stats.standardDeviation([0.631515, 0.507712, 0.129180, 0.318823, 0.658417, 0.350802]), 0.18614600096765443);
    t.is(stats.standardDeviation([0.377946, 0.795616, 0.674094, 0.255277, 0.128990, 0.913893]), 0.288067174990873);
});
test('Calculate Sample Standard Deviation', t => {
    t.is(stats.standardDeviation([1, 1, 1], false, true), 0);
    t.is(stats.standardDeviation([1, 2, 3], false, true), 1);
    t.is(stats.standardDeviation([0.5, 1.5], false, true), 0.7071067811865476);
    t.is(stats.standardDeviation([0.039160, 0.479928, 0.172736, 0.280229, 0.951001, 0.509840], false, true), 0.3218927152482123);
    t.is(stats.standardDeviation([0.135651, 0.721946, 0.068511, 0.801846, 0.910453, 0.277919], false, true), 0.3676761432596173);
    t.is(stats.standardDeviation([0.243493, 0.726105, 0.433715, 0.177424, 0.705072, 0.686156], false, true), 0.24574209124913868);
    t.is(stats.standardDeviation([0.666985, 0.613706, 0.727950, 0.137046, 0.218014, 0.673549], false, true), 0.25842366472803274);
    t.is(stats.standardDeviation([0.039838, 0.961914, 0.128555, 0.942817, 0.913701, 0.552287], false, true), 0.4206219322622157);
    t.is(stats.standardDeviation([0.319472, 0.936252, 0.020962, 0.614555, 0.712406, 0.734566], false, true), 0.3306294798474066);
    t.is(stats.standardDeviation([0.853676, 0.861009, 0.809062, 0.191420, 0.149629, 0.251733], false, true), 0.3544822478651082);
    t.is(stats.standardDeviation([0.413456, 0.539293, 0.690883, 0.751103, 0.274134, 0.204435], false, true), 0.22100753223725203);
    t.is(stats.standardDeviation([0.631515, 0.507712, 0.129180, 0.318823, 0.658417, 0.350802], false, true), 0.20391272743872563);
    t.is(stats.standardDeviation([0.377946, 0.795616, 0.674094, 0.255277, 0.128990, 0.913893], false, true), 0.31556177963857834);
});

test('Calculate Population Variance', t => {
    t.is(stats.variance([1, 1, 1]), 0);
    t.is(stats.variance([1, 2, 3]), 0.6666666666666666);
    t.is(stats.variance([0.5, 1.5]), 0.25);
    t.is(stats.variance([0.039160, 0.479928, 0.172736, 0.280229, 0.951001, 0.509840]), 0.08634576677488888);
    t.is(stats.variance([0.135651, [0.721946, 0.068511], 0.801846, 0.910453, 0.277919]), 0.11265478860188886);
    t.is(stats.variance([0.243493, [0.726105, [0.433715, 0.177424], 0.705072], 0.686156]), 0.05032431284291667);
    t.is(stats.variance([0.666985, 0.613706, 0.727950, 0.137046, 0.218014, 0.673549]), 0.05565232540955556);
    t.is(stats.variance([0.666985, [0.613706, [0.727950, [0.137046, [0.218014]], 0.673549]]]), 0.05565232540955556);
    t.is(stats.variance([0.039838, 0.961914, 0.128555, 0.942817, 0.913701, 0.552287]), 0.14743567491666668);
    t.is(stats.variance([[0.039838, 0.961914], [0.128555, 0.942817], [0.913701, 0.552287]]), 0.14743567491666668);
    t.is(stats.variance([0.319472, 0.936252, 0.020962, 0.614555, 0.712406, 0.734566]), 0.09109654412013889);
    t.is(stats.variance([0.319472, [[0.936252, 0.020962], [0.614555, 0.712406]], 0.734566]), 0.09109654412013889);
    t.is(stats.variance([0.853676, 0.861009, 0.809062, 0.191420, 0.149629, 0.251733]), 0.10471472004291667);
    t.is(stats.variance([0.413456, 0.539293, 0.690883, 0.751103, 0.274134, 0.204435]), 0.040703607754666665);
    t.is(stats.variance([0.631515, 0.507712, 0.129180, 0.318823, 0.658417, 0.350802]), 0.034650333676250006);
    t.is(stats.variance([0.377946, 0.795616, 0.674094, 0.255277, 0.128990, 0.913893]), 0.08298269730722223);
});
test('Calculate Sample Variance', t => {
    t.is(stats.variance([1, 1, 1], false, true), 0);
    t.is(stats.variance([1, 2, 3], false, true), 1);
    t.is(stats.variance([0.5, 1.5], false, true), 0.5);
    t.is(stats.variance([0.039160, 0.479928, 0.172736, 0.280229, 0.951001, 0.509840], false, true), 0.10361492012986666);
    t.is(stats.variance([0.135651, [0.721946, 0.068511], 0.801846, 0.910453, 0.277919], false, true), 0.13518574632226663);
    t.is(stats.variance([0.243493, [0.726105, [0.433715, 0.177424], 0.705072], 0.686156], false, true), 0.060389175411500004);
    t.is(stats.variance([0.666985, [0.613706, [0.727950, [0.137046, [0.218014]], 0.673549]]], false, true), 0.06678279049146667);
    t.is(stats.variance([[0.039838, 0.961914], [0.128555, 0.942817], [0.913701, 0.552287]], false, true), 0.1769228099);
    t.is(stats.variance([0.319472, [[0.936252, 0.020962], [0.614555, 0.712406]], 0.734566], false, true), 0.10931585294416665);
    t.is(stats.variance([0.853676, 0.861009, 0.809062, 0.191420, 0.149629, 0.251733], false, true), 0.1256576640515);
    t.is(stats.variance([0.413456, 0.539293, 0.690883, 0.751103, 0.274134, 0.204435], false, true), 0.048844329305599996);
    t.is(stats.variance([0.631515, 0.507712, 0.129180, 0.318823, 0.658417, 0.350802], false, true), 0.041580400411500004);
    t.is(stats.variance([0.377946, 0.795616, 0.674094, 0.255277, 0.128990, 0.913893], false, true), 0.09957923676866667);
});

var Q = [
    [
        [525, 738],
        [272, 547, 533],
        {a: 698, b: 34374, c: 61},
        {a: 698, b: 374, c: -261},
        [698, 374, 61],
        [11234, 374, -61],
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
test('Max Length', t => {
    t.is(stats.maxLength(Q, 3), null);
    t.is(stats.maxLength(Q, 2), 2);
    t.is(stats.maxLength(Q, 1), 16);
    t.is(stats.maxLength(Q, 0), 8);
    t.is(stats.maxLength(Q), 8);
});
test('Min Length', t => {
    t.is(stats.minLength(Q, 3), null);
    t.is(stats.minLength(Q, 2), 2);
    t.is(stats.minLength(Q, 1), 2);
    t.is(stats.minLength(Q, 0), 2);
    t.is(stats.minLength(Q), 2);
});

test('Max and Min Number', t => {
    t.deepEqual(stats.mnmNumber(Q, false), {
        min: -61,
        max: 11234
    });
    t.deepEqual(stats.mnmNumber(Q, true), {
        min: -261,
        max: 34374
    });
});
test('Max Number', t => {
    t.is(stats.maxNumber(Q, false), 11234);
    t.is(stats.maxNumber(Q, true), 34374);
});
test('Min Number', t => {
    t.is(stats.minNumber(Q, false), -61);
    t.is(stats.minNumber(Q, true), -261);
});

test('Range', t => {
    t.is(stats.range(Q, false), 11295);
    t.is(stats.range(Q, true), 34635);
});
test('Mid-range', t => {
    t.deepEqual(stats.midRange(Q, false), 5586.5);
    t.deepEqual(stats.midRange(Q, true), 17056.5);
});

test('Sum', t => {
    t.is(stats.sum(Q, false), 25294);
    t.is(stats.sum(Q, true), 61238);
});
test('Histogram', t => {
    var h = stats.histogram(Q, false);
    t.is(h[42], 1);
    t.is(h[698], 4);
    t.is(h[34374], undefined);

    h = stats.histogram(Q, true);
    t.is(h[42], 1);
    t.is(h[698], 6);
    t.is(h[34374], 1);
});

test('Mean', t => {
    t.is(stats.mean([1, 2, 3], false), 2);
    t.is(stats.mean(Q, false), 562.0888888888888);
    t.is(stats.mean(Q, true), 1200.7450980392157);
});
test('Median', t => {
    t.is(stats.median([1, 2, 3], false), 2);
    t.is(stats.median(Q, false), 533);
    t.is(stats.median(Q, true), 738);
});
test('Mode', t => {
    t.deepEqual(stats.mode(Q, false).values, ['61', '374', '698']);
    t.deepEqual(stats.mode(Q, true).values, ['698']);
});

test('Sum Of Squared Deviation', t => {
    t.is(stats.sumOfSquaredDeviation([1, 2, 3]), 2);
    t.is(stats.sumOfSquaredDeviation(Q, false), 119719425.64444444);
    t.is(stats.sumOfSquaredDeviation(Q, true), 1243163675.6862748);
});
test('Sum Of Squares', t => {
    t.is(stats.sumOfSquares([1, 2, 3]), 14);
    t.is(stats.sumOfSquares(Q, false), 133936902);
    t.is(stats.sumOfSquares(Q, true), 1316694904);
});
test('Mean Deviation', t => {
    t.is(stats.meanDeviation([1, 2, 3]), 2 / 3);
    t.is(stats.meanDeviation(Q, false), 2660431.6809876543);
    t.is(stats.meanDeviation(Q, true), 24375758.346789703);
});
test('Root Mean Square', t => {
    t.is(stats.rootMeanSquare([1, 2, 3]), 2.160246899469287);
    t.is(stats.rootMeanSquare(Q, false), 1725.2175514989408);
    t.is(stats.rootMeanSquare(Q, true), 5081.09704072407);
});