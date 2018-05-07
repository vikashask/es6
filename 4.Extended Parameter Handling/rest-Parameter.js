/* 
Aggregation of remaining arguments into single parameter of variadic functions.
 */
function f(x, y, ...a) { // ...a = "vikash", true, 7 is rest paramater
    return (x + y) * a.length;
}
f(1, 2, "vikash", true, 7) //9;