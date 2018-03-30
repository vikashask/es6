/* 
Spreading of elements of an iterable collection (like an array or even a string) into both literal 
elements and individual function parameters.
 */
var params = ["vikash", true, 7];
var other = [1, 2, ...params]; 
console.log(other)// [ 1, 2, "hello", true, 7 ] 
function f(x, y, ...a) {
    return (x + y) * a.length;
}
f(1, 2, ...params) === 9;
var str = "raj";
var chars = [...str]; // [ "f", "o", "o" ]
console.log(chars);