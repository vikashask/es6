/* 
Intuitive and flexible destructuring of Arrays into individual variables during assignment.
 */

var list = [1, 2, 3];
var [a, , b] = list;
console.log(a, b); //  1 3
[b, a] = [a, b];
console.log(a, b); // 3 1


// object matching
var data =  {name:1,id:2};
var {name,id}=data

console.log(name,'name');
console.log(id,'id');

