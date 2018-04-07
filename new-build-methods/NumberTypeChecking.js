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