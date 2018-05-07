/* 
Block-scoped variables (and constants) without hoisting. 
*/
let scopeVariable = [];
for (let i = 0; i <= 2; i++) {
    scopeVariable[i] = function () {
        return i * 2;
    };
}
console.log(scopeVariable[0]())// 0;
console.log(scopeVariable[1]()) // 2;
console.log(scopeVariable[2]()) // 4;