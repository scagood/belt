const comp = require('./compare');
const math = require('./maths');

const cosineRuleLength = math.cosineRuleLength;
const cosineRuleAngle = math.cosineRuleAngle;
const sineRuleLength = math.sineRuleLength;
const sineRuleAngle = math.sineRuleAngle;

const trigonometry = function (input) {
    let typeDetect = '';
    let a = input.a;
    let b = input.b;
    let c = input.c;
    let A = input.A;
    let B = input.B;
    let C = input.C;

    // Convert inputs into a binary string.
    typeDetect += comp.isNum(a) ? '1' : '0';
    typeDetect += comp.isNum(b) ? '1' : '0';
    typeDetect += comp.isNum(c) ? '1' : '0';
    typeDetect += comp.isNum(A) ? '1' : '0';
    typeDetect += comp.isNum(B) ? '1' : '0';
    typeDetect += comp.isNum(C) ? '1' : '0';

    switch (typeDetect) {
        case '111000':
            // a, b, c
            A = cosineRuleAngle(a, b, c);
            B = cosineRuleAngle(b, a, c);
            C = cosineRuleAngle(c, a, b);
            break;
        
        case '110100':
            // a, b, A
            B = sineRuleAngle(a, A, b);
            C = Math.PI / 2 - A - B;
            c = cosineRuleLength(a, b, C);
            break;
        case '110010':
            // a, b, B
            A = sineRuleAngle(b, B, a);
            C = Math.PI / 2 - A - B;
            c = cosineRuleLength(a, b, C);
            break;
        case '110001':
            // a, b, C
            c = cosineRuleLength(a, b, C);
            A = cosineRuleAngle(a, b, c);
            B = sineRuleAngle(a, A, b);
            break;
            
        case '101100':
            // a, c, A
            C = sineRuleAngle(a, A, c);
            B = Math.PI / 2 - A - C;
            b = sineRuleLength(a, A, B);
            break;
        case '101010':
            // a, c, B
            b = cosineRuleLength(a, c, B);
            A = cosineRuleAngle(a, b, c);
            B = cosineRuleAngle(b, c, a);
            break;
        case '101001':
            // a, c, C
            A = sineRuleAngle(c, C, a);
            B = Math.PI / 2 - A - C;
            b = sineRuleLength(a, A, B);
            break;
            /*
        case '011100':
            // b, c, A
            C = sineRuleAngle(a, A, c);
            B = Math.PI / 2 - A - C;
            b = sineRuleLength(a, A, B);
            break;
        case '011010':
            // b, c, B
            b = cosineRuleLength(a, c, B);
            A = cosineRuleAngle(a, b, c);
            B = cosineRuleAngle(b, c, a);
            break;
        case '011001':
            // b, c, C
            A = sineRuleAngle(c, C, a);
            B = Math.PI / 2 - A - C;
            b = sineRuleLength(a, A, B);
            break;
            */
        default:
            output.error = 'Not enough information';
            break;

    }
};

module.exports = {
    trigonometry: trigonometry
};
