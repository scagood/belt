function map(old, fMin, fMax, tMin, tMax) {
    return ((old - fMin) * (tMax - tMin) / (fMax - fMin)) + tMin;
}
function probMap(old, low, high, prob) {
    low = def(low) ? low : 0;
    high = def(high) ? high : 1;
    prob = def(prob) ? prob : 1;
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
}
function moveToBounds(old, min, max) {
    while (old > max || old < min) {
        if (old < min) {
            old = min + (min - old);
        } else {
            old = max - (old - max);
        }
    }
    return old;
}
function minLen(array) {
    var a;
    var min = array[Object.keys(array)[0]].length;

    for (a in array) {
        if ({}.hasOwnProperty.call(array, a) && min > array[a].length) {
            min = array[a].length;
        }
    }

    return min;
}
function maxLen(array) {
    var a;
    var max = 0;
    for (a in array) {
        if ({}.hasOwnProperty.call(array, a) && array[a].length > max) {
            max = array[a].length;
        }
    }

    return max;
}
