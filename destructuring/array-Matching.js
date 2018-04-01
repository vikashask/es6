/* 
Intuitive and flexible destructuring of Arrays into individual variables during assignment.
 */

var list = [1, 2, 3];
var [a, , b] = list;
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);