/* 
Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
*/

function arrayParamFunction([name, val]) {
  console.log(name, val);
}

function objectParamFunctionDefaultValue({ name: n, val: v }) {
  console.log(n, v);
}

function objectParamFunction({ name, val }) {
  console.log(name, val);
}
arrayParamFunction(["vikash", 42]); // vikash 42

objectParamFunctionDefaultValue({
  name: "kumar",
  val: 7,
}); // kumar 7

objectParamFunction({
  name: "verma",
  val: 42,
}); // verma 42
