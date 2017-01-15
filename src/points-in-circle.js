function pointInCircle(px, py, x, y, r) {
    return ((px - x) * (px - x)) + ((py - y) * (py - y)) <= (r * r);
}
function pointsInCircle(x, y, r) {
    var px;
    var py;
    var xSym;
    var ySym;
    var points = [];
    for (px = x - r; px <= x; px++) {
        for (py = y - r; py <= y; py++) {
            if (pointInCircle(px, py, x, y, r)) {
                xSym = x - (px - x);
                ySym = y - (py - y);

                points[points.length] = [px, py];
                if (py !== ySym) {
                    points[points.length] = [px, ySym];
                }
                if (px !== xSym) {
                    points[points.length] = [xSym, py];
                }
                if (px !== xSym && py !== ySym) {
                    points[points.length] = [xSym, ySym];
                }
            }
        }
    }

    return points;
}

console.log(pointsInCircle(3, 3, 2));
