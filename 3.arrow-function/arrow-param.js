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
