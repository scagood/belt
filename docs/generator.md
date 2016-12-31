<a name="module_generator"></a>

## generator
The generation module of belt.js


* [generator](#module_generator)
    * [~random(min, max)](#module_generator..random) ⇒ <code>Number</code>
    * [~randomInt(min, max)](#module_generator..randomInt) ⇒ <code>Number</code>
    * [~randomArray(size, depth, min, max)](#module_generator..randomArray) ⇒ <code>Array</code>

<a name="module_generator..random"></a>

### generator~random(min, max) ⇒ <code>Number</code>
Generates a random float between min & max

**Kind**: inner method of <code>[generator](#module_generator)</code>  
**Returns**: <code>Number</code> - The random float  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum number |
| max | <code>Number</code> | The maximum number |

<a name="module_generator..randomInt"></a>

### generator~randomInt(min, max) ⇒ <code>Number</code>
Generates a random integer between min & max

**Kind**: inner method of <code>[generator](#module_generator)</code>  
**Returns**: <code>Number</code> - The random integer  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum number |
| max | <code>Number</code> | The maximum number |

<a name="module_generator..randomArray"></a>

### generator~randomArray(size, depth, min, max) ⇒ <code>Array</code>
Generates a random array[size][depth] in dimentions

**Kind**: inner method of <code>[generator](#module_generator)</code>  
**Returns**: <code>Array</code> - Length of longest array at 'depth'  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Number</code> | The size of the array |
| depth | <code>Number</code> | The depth of the array |
| min | <code>Number</code> | The minimum number to generate for inside array |
| max | <code>Number</code> | The maximum number to generate for inside array |

