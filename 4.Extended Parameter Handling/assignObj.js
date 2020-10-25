let obj = {};
let finalObj = { ...obj, name: "vikask" }; // alternative of assign obj property
console.log("finalArr", finalObj); // 3

let listObj = { name: "vikask" };
let finalListObj = { ...listObj, age: "20" };

console.log("finalListObj", finalListObj);
