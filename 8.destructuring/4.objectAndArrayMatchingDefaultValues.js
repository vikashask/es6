// Simple and intuitive default values for destructuring of Objects and Arrays.

var obj = {
    a: 1
};
var list = [1];
var {
    a,
    b = 2
} = obj;

console.log('a:', a); // 1
console.log('b:', b); // 2

var [x, y = 2] = list;

console.log('x:', x); // 1
console.log('y:', y); // 2