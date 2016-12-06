<a name="module_maths"></a>

## maths
The maths module of belt.js


* [maths](#module_maths)
    * [~map(old, fMin, fMax, tMin, tMax)](#module_maths..map) ⇒ <code>Number</code>
    * [~probMap(old, low, high, prob)](#module_maths..probMap) ⇒ <code>Number</code>
    * [~moveToBounds(old, min, max)](#module_maths..moveToBounds) ⇒ <code>Number</code>
    * [~roundDP(number, precision)](#module_maths..roundDP) ⇒ <code>Number</code>
    * [~roundSF(number, precision)](#module_maths..roundSF) ⇒ <code>Number</code>
    * [~sum(points)](#module_maths..sum) ⇒ <code>Number</code>
    * [~productSum(m1, m2)](#module_maths..productSum) ⇒ <code>Number</code>
    * [~mean(points)](#module_maths..mean) ⇒ <code>Number</code>
    * [~standardDeviation(points, sample)](#module_maths..standardDeviation) ⇒ <code>Number</code>
    * [~gaussianDistribution(coords, stdDev)](#module_maths..gaussianDistribution) ⇒ <code>Number</code>
    * [~pythag(x, y)](#module_maths..pythag) ⇒ <code>Number</code>
    * [~toDegrees(angle)](#module_maths..toDegrees) ⇒ <code>Number</code>
    * [~toRadians(angle)](#module_maths..toRadians) ⇒ <code>Number</code>
    * [~distance(x1, y1, x2, y2)](#module_maths..distance) ⇒ <code>Number</code>
    * [~angle(x1, y1, x2, y2)](#module_maths..angle) ⇒ <code>Number</code>
    * [~toPolar(x, y)](#module_maths..toPolar) ⇒ <code>PolarPoint</code>
    * [~toCartesian(r, theta, radians)](#module_maths..toCartesian) ⇒ <code>CartesianPoint</code>
    * [~cosineRuleLength(a, b, C)](#module_maths..cosineRuleLength) ⇒ <code>Number</code>
    * [~cosineRuleAngle(a, b, c)](#module_maths..cosineRuleAngle) ⇒ <code>Number</code>
    * [~sineRuleLength(a, A, B)](#module_maths..sineRuleLength) ⇒ <code>Number</code>
    * [~sineRuleAngle(a, A, b)](#module_maths..sineRuleAngle) ⇒ <code>Number</code>
    * [~PolarPoint](#module_maths..PolarPoint) : <code>Object</code>
    * [~CartesianPoint](#module_maths..CartesianPoint) : <code>Object</code>

<a name="module_maths..map"></a>

### maths~map(old, fMin, fMax, tMin, tMax) ⇒ <code>Number</code>
A simple function to map a number from one range to another

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The number in the new range  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The number from the initial range |
| fMin | <code>Number</code> | The lowest number in the 'from' range |
| fMax | <code>Number</code> | The highest number in the 'from' range |
| tMin | <code>Number</code> | The lowest number in the 'to' range |
| tMax | <code>Number</code> | The highest number in the 'to' range |

<a name="module_maths..probMap"></a>

### maths~probMap(old, low, high, prob) ⇒ <code>Number</code>
A function that maps based on probability between 2 points

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The number in the new range  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The input numer (between 0 and 1) |
| low | <code>Number</code> | The lowest number in the output range |
| high | <code>Number</code> | The highest number in the output range |
| prob | <code>Number</code> | [description] |

<a name="module_maths..moveToBounds"></a>

### maths~moveToBounds(old, min, max) ⇒ <code>Number</code>
Shift an out of bounds number back into bounds.

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The number after being moved within the bounds  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The out of bounds number |
| min | <code>Number</code> | The smallest number in the bounds range |
| max | <code>Number</code> | The largest number in the bounds range |

<a name="module_maths..roundDP"></a>

### maths~roundDP(number, precision) ⇒ <code>Number</code>
Round 'number' to 'precision' decimal places

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The rounded number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to round |
| precision | <code>Number</code> | The decimal places to round to |

<a name="module_maths..roundSF"></a>

### maths~roundSF(number, precision) ⇒ <code>Number</code>
Round 'number' to 'precision' significant figures

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The rounded number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to round |
| precision | <code>Number</code> | The number of significant figures |

<a name="module_maths..sum"></a>

### maths~sum(points) ⇒ <code>Number</code>
Calculate the Sum of 'points'

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The Sum of the points  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | An array of points to get the Sum of. |

<a name="module_maths..productSum"></a>

### maths~productSum(m1, m2) ⇒ <code>Number</code>
Summing the products of to Arrays

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The sum of the products  

| Param | Type | Description |
| --- | --- | --- |
| m1 | <code>Array</code> | The first matrix |
| m2 | <code>Array</code> | The second matrix |

<a name="module_maths..mean"></a>

### maths~mean(points) ⇒ <code>Number</code>
Calculate the Mean of 'points'

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The Mean of the points  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | An array of points to get the Mean of. |

<a name="module_maths..standardDeviation"></a>

### maths~standardDeviation(points, sample) ⇒ <code>Number</code>
Calculate the Standard Deviation of 'points'

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The Standard Deviation of the points  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | An array of points to get the Standard Deviation of. |
| sample | <code>Boolean</code> | Is this a sample of the population |

<a name="module_maths..gaussianDistribution"></a>

### maths~gaussianDistribution(coords, stdDev) ⇒ <code>Number</code>
Find the value of points 'coords' in an n dimentional Gaussian Distribution

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The probability at 'coords'  

| Param | Type | Description |
| --- | --- | --- |
| coords | <code>Array</code> | An 'N' dimentional array of coordinates |
| stdDev | <code>Number</code> | The Standard Deviation to be used on calculating the curve |

<a name="module_maths..pythag"></a>

### maths~pythag(x, y) ⇒ <code>Number</code>
Perform pythagoras' theorum

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Length of 'hypotenuse'  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Length of 'opposite side' |
| y | <code>Number</code> | Length of 'adjacent side' |

<a name="module_maths..toDegrees"></a>

### maths~toDegrees(angle) ⇒ <code>Number</code>
Convert from radians to degrees

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Degrees  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | Radians to convert to degrees |

<a name="module_maths..toRadians"></a>

### maths~toRadians(angle) ⇒ <code>Number</code>
Convert from degrees to radians

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Radians  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | Degrees to convert to radians |

<a name="module_maths..distance"></a>

### maths~distance(x1, y1, x2, y2) ⇒ <code>Number</code>
The distance between two points

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The distance between the two points  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>Number</code> | The 'x' component of the first coordinate |
| y1 | <code>Number</code> | The 'y' component of the first coordinate |
| x2 | <code>Number</code> | The 'x' component of the second coordinate |
| y2 | <code>Number</code> | The 'y' component of the second coordinate |

<a name="module_maths..angle"></a>

### maths~angle(x1, y1, x2, y2) ⇒ <code>Number</code>
Calculate the computed angle about (x1,y1)

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The angle about (x1, y1) from (x2, y1) to (x2, y2)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>Number</code> | The 'x' component of the first coordinate |
| y1 | <code>Number</code> | The 'y' component of the first coordinate |
| x2 | <code>Number</code> | The 'x' component of the second coordinate |
| y2 | <code>Number</code> | The 'y' component of the second coordinate |

<a name="module_maths..toPolar"></a>

### maths~toPolar(x, y) ⇒ <code>PolarPoint</code>
Converting from cartesian to polar coordinates

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>PolarPoint</code> - The polar coordinate of cartesian (x, y)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The 'x' coordinate |
| y | <code>Number</code> | The 'y' coordinate |

<a name="module_maths..toCartesian"></a>

### maths~toCartesian(r, theta, radians) ⇒ <code>CartesianPoint</code>
Converting from polar to cartesian coordinates

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>CartesianPoint</code> - The Cartesian form of polar (r, theta)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |
| radians | <code>boolean</code> | Is theta in radians |

<a name="module_maths..cosineRuleLength"></a>

### maths~cosineRuleLength(a, b, C) ⇒ <code>Number</code>
The Cosine Rule rearranged to find Length

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Length of the side opposite to angle C  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of one side a triangle |
| b | <code>Number</code> | Length of the other side of a triangle |
| C | <code>Number</code> | Angle opposite to the side of the triangle that you want to get |

<a name="module_maths..cosineRuleAngle"></a>

### maths~cosineRuleAngle(a, b, c) ⇒ <code>Number</code>
The Cosine Rule arranged to find angles

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - The required angle  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length opposite to the requied angles |
| b | <code>Number</code> | Length of one side a triangle |
| c | <code>Number</code> | Length of the other side of a triangle |

<a name="module_maths..sineRuleLength"></a>

### maths~sineRuleLength(a, A, B) ⇒ <code>Number</code>
The Sine Rule rearranged to find Length

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Length of the side opposite to angle B  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of the side of a triangle opposite to angle A |
| A | <code>Number</code> | Angle opposite to side a |
| B | <code>Number</code> | Angle opposite to the side of the triangle that you want to get |

<a name="module_maths..sineRuleAngle"></a>

### maths~sineRuleAngle(a, A, b) ⇒ <code>Number</code>
The Sine Rule arranged to find angles

**Kind**: inner method of <code>[maths](#module_maths)</code>  
**Returns**: <code>Number</code> - Angle opposite to side b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of the side of a triangle opposite to angle A |
| A | <code>Number</code> | Angle opposite to side a |
| b | <code>Number</code> | Length opposite to the angle that you want to get |

<a name="module_maths..PolarPoint"></a>

### maths~PolarPoint : <code>Object</code>
**Kind**: inner typedef of <code>[maths](#module_maths)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |

<a name="module_maths..CartesianPoint"></a>

### maths~CartesianPoint : <code>Object</code>
**Kind**: inner typedef of <code>[maths](#module_maths)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |

