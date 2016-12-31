<a name="module_util"></a>

## util
The utility module of belt.js


* [util](#module_util)
    * [~diss(init)](#module_util..diss) ⇒ <code>Array</code>
    * [~forAll(array, func)](#module_util..forAll)
    * [~first(array, objects)](#module_util..first)

<a name="module_util..diss"></a>

### util~diss(init) ⇒ <code>Array</code>
Dissasociates init from return

**Kind**: inner method of <code>[util](#module_util)</code>  
**Returns**: <code>Array</code> - The dissasociated element  

| Param | Type | Description |
| --- | --- | --- |
| init | <code>Array</code> | The element to dissasociate |

<a name="module_util..forAll"></a>

### util~forAll(array, func)
Calls 'func(element)' for every element in 'array'

**Kind**: inner method of <code>[util](#module_util)</code>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array of things to iterate through |
| func | <code>function</code> | The 'callback' for every element |

<a name="module_util..first"></a>

### util~first(array, objects)
Gets the very first element in an n-dimentional 'array'

**Kind**: inner method of <code>[util](#module_util)</code>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array |
| objects | <code>Bool</code> | Should the function search objects as well |

