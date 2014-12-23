# Function or

Logical `or`. Test if at least one value is defined with a nonzero/nonempty value.


## Syntax

```js
math.or(x, y)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | Number &#124; BigNumber &#124; Boolean &#124; Complex &#124; Unit &#124; String &#124; Array &#124; Matrix &#124; null &#124; undefined | First value to check
`y` | Number &#124; BigNumber &#124; Boolean &#124; Complex &#124; Unit &#124; String &#124; Array &#124; Matrix &#124; null &#124; undefined | Second value to check

### Returns

Type | Description
---- | -----------
Boolean |  Returns true when one of the inputs is defined with a nonzero/nonempty value.


## Examples

```js
math.or(2, 4);   // returns true

a = [2, 5, 1];
b = [];
c = 0;

math.or(a, b);   // returns true
math.or(b, c);   // returns false
```


## See also

[and](and.md),
[not](not.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->