/* 

In short: context inside arrow functions is lexically or statically defined.
the value of this inside arrow functions is not dependent on how they are invoked or how they are defined.
It depends only on its enclosing context.

An arrow function expression has a shorter syntax than a function expression and does not have its
own this, arguments, super, or new.target. These function expressions are best suited for non-method 
functions, and they cannot be used as constructors.
 
*/
/* 
    () => { ... } // no parameter
 */

// x => { ... } // one parameter, an identifier
const squares = [1, 2, 3].map(x => x * x);
console.log('Square ', squares);  // [1,4,9]

// (x, y) => { ... } // several parameters
const param = [
    [1, 2],
    [3, 4]
].map(([a, b]) => a + b);

console.log('param ', param); // [3,7]

// More expressive closure syntax.
let fives = [];
const nums = [5, 33, 55].forEach(v => {
    if (v % 5 === 0) fives.push(v);
})
console.log('check Modules of 5',fives);
