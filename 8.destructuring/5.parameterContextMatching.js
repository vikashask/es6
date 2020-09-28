/* 
Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
*/

function f([name, val]) {
  console.log(name, val);
}

function g({ name: n, val: v }) {
  console.log(n, v);
}

function h({ name, val }) {
  console.log(name, val);
}
f(["vikash", 42]); // vikash 42
g({
  name: "kumar",
  val: 7,
}); // kumar 7
h({
  name: "verma",
  val: 42,
}); // verma 42
