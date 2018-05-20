/* 
Aggregation of remaining arguments into single parameter of variadic functions.
 */
function restFunction(x, y, ...a) { // ...a = "vikash", true, 7 is rest paramater
    return (x + y) * a.length;
}
console.log(restFunction(1, 2, "vikash", true, 7)); //9;

// getting sum of all param
function sumOfAll(...params) {
    let sum = 0;
    for(let param of params){
        sum += param;
    }
    return sum;
}
console.log('-----------');
console.log(sumOfAll(1)); // 1
console.log(sumOfAll(1,2,3,4)); // 10
console.log(sumOfAll(1,5,6,0,8,7)); // 27

function multiplyOfParam(...params){
    let multiply = 1;
    for (const iterator of params) {
        multiply *=iterator;
    }
    return multiply;
}
console.log('---------');
console.log(multiplyOfParam(1,2)); // 2
console.log(multiplyOfParam(1,2,3));// 6
console.log(multiplyOfParam(1,2,4));// 8

