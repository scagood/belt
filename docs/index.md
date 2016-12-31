# belt.js - A tool kit for JS

First things first. Yes I know there are others but this one's mine :joy:

## Modules

* [generator](./generator#module_generator)
    * [~random(min, max)](./generator#module_generator..random) ⇒ <code>Number</code>
    * [~randomInt(min, max)](./generator#module_generator..randomInt) ⇒ <code>Number</code>
    * [~randomArray(size, depth, min, max)](./generator#module_generator..randomArray) ⇒ <code>Array</code>
* [maths](./maths#module_maths)
    * [~map(old, fMin, fMax, tMin, tMax)](./maths#module_maths..map) ⇒ <code>Number</code>
    * [~probMap(old, low, high, prob)](./maths#module_maths..probMap) ⇒ <code>Number</code>
    * [~moveToBounds(old, min, max)](./maths#module_maths..moveToBounds) ⇒ <code>Number</code>
    * [~roundDP(number, precision)](./maths#module_maths..roundDP) ⇒ <code>Number</code>
    * [~roundSF(number, precision)](./maths#module_maths..roundSF) ⇒ <code>Number</code>
    * [~productSum(m1, m2)](./maths#module_maths..productSum) ⇒ <code>Number</code>
    * [~gaussianDistribution(coords, stdDev)](./maths#module_maths..gaussianDistribution) ⇒ <code>Number</code>
    * [~pythag(x, y)](./maths#module_maths..pythag) ⇒ <code>Number</code>
    * [~toDegrees(angle)](./maths#module_maths..toDegrees) ⇒ <code>Number</code>
    * [~toRadians(angle)](./maths#module_maths..toRadians) ⇒ <code>Number</code>
    * [~distance(x1, y1, x2, y2)](./maths#module_maths..distance) ⇒ <code>Number</code>
    * [~angle(x1, y1, x2, y2)](./maths#module_maths..angle) ⇒ <code>Number</code>
    * [~toPolar(x, y)](./maths#module_maths..toPolar) ⇒ <code>PolarPoint</code>
    * [~toCartesian(r, theta, radians)](./maths#module_maths..toCartesian) ⇒ <code>CartesianPoint</code>
    * [~cosineRuleLength(a, b, C)](./maths#module_maths..cosineRuleLength) ⇒ <code>Number</code>
    * [~cosineRuleAngle(a, b, c)](./maths#module_maths..cosineRuleAngle) ⇒ <code>Number</code>
    * [~sineRuleLength(a, A, B)](./maths#module_maths..sineRuleLength) ⇒ <code>Number</code>
    * [~sineRuleAngle(a, A, b)](./maths#module_maths..sineRuleAngle) ⇒ <code>Number</code>
    * [~PolarPoint](./maths#module_maths..PolarPoint) : <code>Object</code>
    * [~CartesianPoint](./maths#module_maths..CartesianPoint) : <code>Object</code>
* [stats](./stats#module_stats)
    * [~maxLength(array, depth, objects)](./stats#module_stats..maxLength) ⇒ <code>Null</code> &#124; <code>Number</code>
    * [~minLength(array, depth, objects)](./stats#module_stats..minLength) ⇒ <code>Null</code> &#124; <code>Number</code>
    * [~mnmNumber(array, objects)](./stats#module_stats..mnmNumber) ⇒ <code>Array</code>
    * [~maxNumber(array, objects)](./stats#module_stats..maxNumber) ⇒ <code>Number</code>
    * [~minNumber(array, objects)](./stats#module_stats..minNumber) ⇒ <code>Number</code>
    * [~range(array, objects)](./stats#module_stats..range) ⇒ <code>Number</code>
    * [~midRange(array, objects)](./stats#module_stats..midRange) ⇒ <code>Number</code>
    * [~sum(array, objects)](./stats#module_stats..sum) ⇒ <code>Number</code>
    * [~histogram(array, objects)](./stats#module_stats..histogram) ⇒ <code>Array</code>
    * [~mean(array, objects)](./stats#module_stats..mean) ⇒ <code>Number</code>
    * [~median(array, objects)](./stats#module_stats..median) ⇒ <code>Number</code>
    * [~mode(array, objects)](./stats#module_stats..mode) ⇒ <code>Number</code>
    * [~sumOfSquaredDeviation(array, objects)](./stats#module_stats..sumOfSquaredDeviation) ⇒ <code>Number</code>
    * [~sumOfSquares(array, objects)](./stats#module_stats..sumOfSquares) ⇒ <code>Number</code>
    * [~meanDeviation(array, objects)](./stats#module_stats..meanDeviation) ⇒ <code>Number</code>
    * [~rootMeanSquare(array, objects)](./stats#module_stats..rootMeanSquare) ⇒ <code>Number</code>
    * [~standardDeviation(array, objects, sample)](./stats#module_stats..standardDeviation) ⇒ <code>Number</code>
    * [~variance(array, objects, sample)](./stats#module_stats..variance) ⇒ <code>Number</code>
* [util](./util#module_util)
    * [~diss(init)](./util#module_util..diss) ⇒ <code>Array</code>
    * [~forAll(array, func)](./util#module_util..forAll)
    * [~first(array, objects)](./util#module_util..first)
