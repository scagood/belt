## Functions

<dl>
<dt><a href="#map">map(old, fMin, fMax, tMin, tMax)</a> ⇒ <code>Number</code></dt>
<dd><p>A simple function to map a number from one range to another</p>
</dd>
<dt><a href="#probMap">probMap(old, low, high, prob)</a> ⇒ <code>Number</code></dt>
<dd><p>A function that maps based on probability between 2 points</p>
</dd>
<dt><a href="#moveToBounds">moveToBounds(old, min, max)</a> ⇒ <code>Number</code></dt>
<dd><p>Shift an out of bounds number back into bounds.</p>
</dd>
<dt><a href="#roundDP">roundDP(number, precision)</a> ⇒ <code>Number</code></dt>
<dd><p>Round &#39;number&#39; to &#39;precision&#39; decimal places</p>
</dd>
<dt><a href="#roundSF">roundSF(number, precision)</a> ⇒ <code>Number</code></dt>
<dd><p>Round &#39;number&#39; to &#39;precision&#39; significant figures</p>
</dd>
<dt><a href="#pythag">pythag(x, y)</a> ⇒ <code>Number</code></dt>
<dd><p>Perform pythagoras&#39; theorum</p>
</dd>
<dt><a href="#toDegrees">toDegrees(angle)</a> ⇒ <code>Number</code></dt>
<dd><p>Convert from radians to degrees</p>
</dd>
<dt><a href="#toRadians">toRadians(angle)</a> ⇒ <code>Number</code></dt>
<dd><p>Convert from degrees to radians</p>
</dd>
<dt><a href="#distance">distance(x1, y1, x2, y2)</a> ⇒ <code>Number</code></dt>
<dd><p>The distance between two points</p>
</dd>
<dt><a href="#angle">angle(x1, y1, x2, y2)</a> ⇒ <code>Number</code></dt>
<dd><p>Calculate the computed angle about (x1,y1)</p>
</dd>
<dt><a href="#toPolar">toPolar(x, y)</a> ⇒ <code><a href="#PolarPoint">PolarPoint</a></code></dt>
<dd><p>Converting from cartesian to polar coordinates</p>
</dd>
<dt><a href="#toCartesian">toCartesian(r, theta, radians)</a> ⇒ <code><a href="#CartesianPoint">CartesianPoint</a></code></dt>
<dd><p>Converting from polar to cartesian coordinates</p>
</dd>
<dt><a href="#cosineRuleLength">cosineRuleLength(a, b, C)</a> ⇒ <code>Number</code></dt>
<dd><p>The Cosine Rule rearranged to find Length</p>
</dd>
<dt><a href="#cosineRuleAngle">cosineRuleAngle(a, b, c)</a> ⇒ <code>Number</code></dt>
<dd><p>The Cosine Rule arranged to find angles</p>
</dd>
<dt><a href="#sineRuleLength">sineRuleLength(a, A, B)</a> ⇒ <code>Number</code></dt>
<dd><p>The Sine Rule rearranged to find Length</p>
</dd>
<dt><a href="#sineRuleAngle">sineRuleAngle(a, A, b)</a> ⇒ <code>Number</code></dt>
<dd><p>The Sine Rule arranged to find angles</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PolarPoint">PolarPoint</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CartesianPoint">CartesianPoint</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="map"></a>

## map(old, fMin, fMax, tMin, tMax) ⇒ <code>Number</code>
A simple function to map a number from one range to another

**Kind**: global function  
**Returns**: <code>Number</code> - The number in the new range  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The number from the initial range |
| fMin | <code>Number</code> | The lowest number in the 'from' range |
| fMax | <code>Number</code> | The highest number in the 'from' range |
| tMin | <code>Number</code> | The lowest number in the 'to' range |
| tMax | <code>Number</code> | The highest number in the 'to' range |

<a name="probMap"></a>

## probMap(old, low, high, prob) ⇒ <code>Number</code>
A function that maps based on probability between 2 points

**Kind**: global function  
**Returns**: <code>Number</code> - The number in the new range  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The input numer (between 0 and 1) |
| low | <code>Number</code> | The lowest number in the output range |
| high | <code>Number</code> | The highest number in the output range |
| prob | <code>Number</code> | [description] |

<a name="moveToBounds"></a>

## moveToBounds(old, min, max) ⇒ <code>Number</code>
Shift an out of bounds number back into bounds.

**Kind**: global function  
**Returns**: <code>Number</code> - The number after being moved within the bounds  

| Param | Type | Description |
| --- | --- | --- |
| old | <code>Number</code> | The out of bounds number |
| min | <code>Number</code> | The smallest number in the bounds range |
| max | <code>Number</code> | The largest number in the bounds range |

<a name="roundDP"></a>

## roundDP(number, precision) ⇒ <code>Number</code>
Round 'number' to 'precision' decimal places

**Kind**: global function  
**Returns**: <code>Number</code> - The rounded number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to round |
| precision | <code>Number</code> | The decimal places to round to |

<a name="roundSF"></a>

## roundSF(number, precision) ⇒ <code>Number</code>
Round 'number' to 'precision' significant figures

**Kind**: global function  
**Returns**: <code>Number</code> - The rounded number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to round |
| precision | <code>Number</code> | The number of significant figures |

<a name="pythag"></a>

## pythag(x, y) ⇒ <code>Number</code>
Perform pythagoras' theorum

**Kind**: global function  
**Returns**: <code>Number</code> - Length of 'hypotenuse'  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Length of 'opposite side' |
| y | <code>Number</code> | Length of 'adjacent side' |

<a name="toDegrees"></a>

## toDegrees(angle) ⇒ <code>Number</code>
Convert from radians to degrees

**Kind**: global function  
**Returns**: <code>Number</code> - Degrees  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | Radians to convert to degrees |

<a name="toRadians"></a>

## toRadians(angle) ⇒ <code>Number</code>
Convert from degrees to radians

**Kind**: global function  
**Returns**: <code>Number</code> - Radians  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | Degrees to convert to radians |

<a name="distance"></a>

## distance(x1, y1, x2, y2) ⇒ <code>Number</code>
The distance between two points

**Kind**: global function  
**Returns**: <code>Number</code> - The distance between the two points  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>Number</code> | The 'x' component of the first coordinate |
| y1 | <code>Number</code> | The 'y' component of the first coordinate |
| x2 | <code>Number</code> | The 'x' component of the second coordinate |
| y2 | <code>Number</code> | The 'y' component of the second coordinate |

<a name="angle"></a>

## angle(x1, y1, x2, y2) ⇒ <code>Number</code>
Calculate the computed angle about (x1,y1)

**Kind**: global function  
**Returns**: <code>Number</code> - The angle about (x1, y1) from (x2, y1) to (x2, y2)  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>Number</code> | The 'x' component of the first coordinate |
| y1 | <code>Number</code> | The 'y' component of the first coordinate |
| x2 | <code>Number</code> | The 'x' component of the second coordinate |
| y2 | <code>Number</code> | The 'y' component of the second coordinate |

<a name="toPolar"></a>

## toPolar(x, y) ⇒ <code>[PolarPoint](#PolarPoint)</code>
Converting from cartesian to polar coordinates

**Kind**: global function  
**Returns**: <code>[PolarPoint](#PolarPoint)</code> - The polar coordinate of cartesian (x, y)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The 'x' coordinate |
| y | <code>Number</code> | The 'y' coordinate |

<a name="toCartesian"></a>

## toCartesian(r, theta, radians) ⇒ <code>[CartesianPoint](#CartesianPoint)</code>
Converting from polar to cartesian coordinates

**Kind**: global function  
**Returns**: <code>[CartesianPoint](#CartesianPoint)</code> - The Cartesian form of polar (r, theta)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |
| radians | <code>boolean</code> | Is theta in radians |

<a name="cosineRuleLength"></a>

## cosineRuleLength(a, b, C) ⇒ <code>Number</code>
The Cosine Rule rearranged to find Length

**Kind**: global function  
**Returns**: <code>Number</code> - Length of the side opposite to angle C  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of one side a triangle |
| b | <code>Number</code> | Length of the other side of a triangle |
| C | <code>Number</code> | Angle opposite to the side of the triangle that you want to get |

<a name="cosineRuleAngle"></a>

## cosineRuleAngle(a, b, c) ⇒ <code>Number</code>
The Cosine Rule arranged to find angles

**Kind**: global function  
**Returns**: <code>Number</code> - The required angle  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length opposite to the requied angles |
| b | <code>Number</code> | Length of one side a triangle |
| c | <code>Number</code> | Length of the other side of a triangle |

<a name="sineRuleLength"></a>

## sineRuleLength(a, A, B) ⇒ <code>Number</code>
The Sine Rule rearranged to find Length

**Kind**: global function  
**Returns**: <code>Number</code> - Length of the side opposite to angle B  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of the side of a triangle opposite to angle A |
| A | <code>Number</code> | Angle opposite to side a |
| B | <code>Number</code> | Angle opposite to the side of the triangle that you want to get |

<a name="sineRuleAngle"></a>

## sineRuleAngle(a, A, b) ⇒ <code>Number</code>
The Sine Rule arranged to find angles

**Kind**: global function  
**Returns**: <code>Number</code> - Angle opposite to side b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Length of the side of a triangle opposite to angle A |
| A | <code>Number</code> | Angle opposite to side a |
| b | <code>Number</code> | Length opposite to the angle that you want to get |

<a name="PolarPoint"></a>

## PolarPoint : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |

<a name="CartesianPoint"></a>

## CartesianPoint : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The radial coordinate |
| theta | <code>Number</code> | The angular coordinate |

