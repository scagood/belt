<a name="module_stats"></a>

## stats
The statistic module of belt.js


* [stats](#module_stats)
    * [~maxLength(array, depth, objects)](#module_stats..maxLength) ⇒ <code>Null</code> &#124; <code>Number</code>
    * [~minLength(array, depth, objects)](#module_stats..minLength) ⇒ <code>Null</code> &#124; <code>Number</code>
    * [~mnmNumber(array, objects)](#module_stats..mnmNumber) ⇒ <code>Array</code>
    * [~maxNumber(array, objects)](#module_stats..maxNumber) ⇒ <code>Number</code>
    * [~minNumber(array, objects)](#module_stats..minNumber) ⇒ <code>Number</code>
    * [~range(array, objects)](#module_stats..range) ⇒ <code>Number</code>
    * [~midRange(array, objects)](#module_stats..midRange) ⇒ <code>Number</code>
    * [~sum(array, objects)](#module_stats..sum) ⇒ <code>Number</code>
    * [~histogram(array, objects)](#module_stats..histogram) ⇒ <code>Array</code>
    * [~mean(array, objects)](#module_stats..mean) ⇒ <code>Number</code>
    * [~median(array, objects)](#module_stats..median) ⇒ <code>Number</code>
    * [~mode(array, objects)](#module_stats..mode) ⇒ <code>Number</code>
    * [~sumOfSquaredDeviation(array, objects)](#module_stats..sumOfSquaredDeviation) ⇒ <code>Number</code>
    * [~sumOfSquares(array, objects)](#module_stats..sumOfSquares) ⇒ <code>Number</code>
    * [~meanDeviation(array, objects)](#module_stats..meanDeviation) ⇒ <code>Number</code>
    * [~rootMeanSquare(array, objects)](#module_stats..rootMeanSquare) ⇒ <code>Number</code>
    * [~standardDeviation(array, objects, sample)](#module_stats..standardDeviation) ⇒ <code>Number</code>
    * [~variance(array, objects, sample)](#module_stats..variance) ⇒ <code>Number</code>

<a name="module_stats..maxLength"></a>

### stats~maxLength(array, depth, objects) ⇒ <code>Null</code> &#124; <code>Number</code>
Gets the length of the longest array in an n-dimentional 'array' at 'depth'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Null</code> - Null if no arrays were found at 'depth'<code>Number</code> - Length of longest array at 'depth'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| depth | <code>Number</code> | What level should the function search (0 implies counting layer 1) |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..minLength"></a>

### stats~minLength(array, depth, objects) ⇒ <code>Null</code> &#124; <code>Number</code>
Gets the length of the shortest array in an n-dimentional 'array' at 'depth'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Null</code> - Null if no arrays were found at 'depth'<code>Number</code> - Length of shortest array at 'depth'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| depth | <code>Number</code> | What level should the function search (0 implies counting layer 1) |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..mnmNumber"></a>

### stats~mnmNumber(array, objects) ⇒ <code>Array</code>
Gets the heighest number in an n-dimentional 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Array</code> - The heighest and lowest numbers in 'array' as follows {max: max, min, min}  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..maxNumber"></a>

### stats~maxNumber(array, objects) ⇒ <code>Number</code>
Gets the heighest number in an n-dimentional 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The heighest number in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..minNumber"></a>

### stats~minNumber(array, objects) ⇒ <code>Number</code>
Gets the lowest number in an n-dimentional 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The lowest number in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..range"></a>

### stats~range(array, objects) ⇒ <code>Number</code>
Gets the range of all numbers in an n-dimentional 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The range of 'array' (max - min)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..midRange"></a>

### stats~midRange(array, objects) ⇒ <code>Number</code>
Gets the Mid-range of all numbers in an n-dimentional 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The arithmetic mean of the maximum and minimum values of 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..sum"></a>

### stats~sum(array, objects) ⇒ <code>Number</code>
Calculate the sum of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The sum of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of numbers to get the sum of |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..histogram"></a>

### stats~histogram(array, objects) ⇒ <code>Array</code>
Calculate the histogram of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Array</code> - The histogram array of all numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of numbers to a histogram of |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..mean"></a>

### stats~mean(array, objects) ⇒ <code>Number</code>
Calculate the mean of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The mean of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the mean of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..median"></a>

### stats~median(array, objects) ⇒ <code>Number</code>
Calculate the median of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The median of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the median of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..mode"></a>

### stats~mode(array, objects) ⇒ <code>Number</code>
Calculate the median of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The median of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the median of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..sumOfSquaredDeviation"></a>

### stats~sumOfSquaredDeviation(array, objects) ⇒ <code>Number</code>
Calculate the Sum of Squared Deviation of 'array' {sum([xn-mean]^2).between(0, n)}

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Sum of Squared Deviation of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Sum of Squared Deviation of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..sumOfSquares"></a>

### stats~sumOfSquares(array, objects) ⇒ <code>Number</code>
Calculate the Sum of Squares of 'array' {sum(xn^2).between(0, n)}

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Sum of Squares of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Sum of Squares of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..meanDeviation"></a>

### stats~meanDeviation(array, objects) ⇒ <code>Number</code>
Calculate the Mean Deviation of 'array' {(sum([xn-mean]^2).between(0, n))/n}

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Mean Deviation of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Mean Deviation of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..rootMeanSquare"></a>

### stats~rootMeanSquare(array, objects) ⇒ <code>Number</code>
Calculate the Root Mean Square of 'array' {sqrt(sum(xn^2).between(0, n) / n)}

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Root Mean Square of numbers in 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Root Mean Square of. |
| objects | <code>Bool</code> | Should the function search objects as well |

<a name="module_stats..standardDeviation"></a>

### stats~standardDeviation(array, objects, sample) ⇒ <code>Number</code>
Calculate the Standard Deviation of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Standard Deviation of the 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Standard Deviation of. |
| objects | <code>Bool</code> | Should the function search objects as well |
| sample | <code>Boolean</code> | Is this a sample of the population |

<a name="module_stats..variance"></a>

### stats~variance(array, objects, sample) ⇒ <code>Number</code>
Calculate the variance of 'array'

**Kind**: inner method of <code>[stats](#module_stats)</code>  
**Returns**: <code>Number</code> - The Standard Deviation of the 'array'  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array of points to get the Standard Deviation of. |
| objects | <code>Bool</code> | Should the function search objects as well |
| sample | <code>Boolean</code> | Is this a sample of the population |

