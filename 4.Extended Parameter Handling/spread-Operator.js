/* 
Spreading of elements of an iterable collection (like an array or even a string) into both literal 
elements and individual function parameters.
 */
var params = ["vikash", true, 7];
var other = [1, 2, ...params]; 
console.log('Spreading other variable',other)// [ 1, 2, "vikash", true, 7 ] 
function f(x, y, ...a) {
    return (x + y) * a.length;
}
f(1, 2, ...params) === 9;
var str = "raj";
var chars = [...str]; // [ "r", "a", "j" ]
console.log('Iteraing string through spread',chars);