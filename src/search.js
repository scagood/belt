var comp = require('./compare');

// Extracting bits from a byte
var bitExtraction = function (input, offset, length, intLen) {
    var c = 0;
    var a;

    intLen = comp.isDef(intLen) ? intLen : (Math.ceil(input.toString(2).length / 8) * 8);
    length = comp.isDef(length) ? length : 1;
    offset = comp.isDef(offset) ? offset : 0;

    for (a = 0; a < length; a++) {
        c = (c << 1) | 1;
    }

    offset = intLen - offset - c.toString(2).length;

    return (input & (c << offset)) >> offset;
};

var indexOf = function (array, find) {
    var i;
    // Confirm that the array exists and it is an array
    if (array === 'undefined' || !comp.isArr(array)) {
        return false;
    }
    // Search the array
    for (i = 0; i < array.length; i++) {
        // If it is what you are looking for return the position
        if (array[i] === find) {
            return i;
        }
    }
    // If it is not found return -1
    return -1;
};

module.exports = {
    bitExtraction: bitExtraction,
    indexOf: indexOf
};
