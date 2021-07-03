// Spread operator and function
function addThreeNumbers(a, b, c) {
  return a + b + c;
}
const arr = [10, 20, 30];
console.log("sum is :", addThreeNumbers(...arr)); // 60
console.log("sum is ", addThreeNumbers(...[1, 2, 3]));  // 6

//copy array using spread operator
let source_arr = [10, 20, 30];
let dest_arr = [...source_arr];
console.log(dest_arr); // [ 10, 20, 30 ]

//concatenate two arrays  ***
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let arr3 = [...arr1, ...arr2];
console.log(arr3);  // [ 10, 20, 30, 40, 50, 60 ]
