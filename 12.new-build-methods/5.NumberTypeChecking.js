/* New functions for checking for non-numbers and finite numbers. */

console.log(Number.isNaN(42))//  false;
console.log(Number.isNaN(NaN));//  true;
console.log(Number.isFinite(Infinity));//  false;
console.log(Number.isFinite(-Infinity));//  false;
console.log(Number.isFinite(NaN));//  false;
console.log(Number.isFinite(123));//  true;

// Number Comparison
console.log(0.1 + 0.2 === 0.3); // false 
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true 

/* 
Number Comparison
Availability of a standard Epsilon value for more precise comparison of floating point numbers.
 */
console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true

/* 
Number Truncation
Truncate a floating point number to its integral part, completely dropping the fractional part.
 */
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0