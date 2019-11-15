# Find Integral

### Info

Create a function that finds the integral of the expression passed, the expression structure is `nx^m`, e.g. `3x^2`, etc.

For example for `3x^2`, the integral would be `1x^3`.

### Hint

In order to find the integral for such expression, all you need to do is add one to the exponent (the second argument) and divide the coefficient (the first argument) by that new number.

### Notes

The output should be a string.
The coefficient and exponent is always a positive integer.

## Examples

```
"3x^2"   ->  "1x^3"
"12x^5"  ->  "2x^6"
"20x^1"  ->  "10x^2"
"40x^3"  ->  "10x^4"
"90x^2"  ->  "30x^3"
```

### References

- Found at [CodeWars](https://www.codewars.com/kata/find-the-integral/train/javascript).

### See solutions:

- [JavaScript](javascript/findIntegral.js)
