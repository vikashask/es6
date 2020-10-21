// the spread operator will basically take each element of the array you are applying the spread to and flatten it out into either arguments or another array provided
const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];
console.log(names);

// We can use the spread operator to "spread" the elements of an array as arguments into a function
const sum = Math.min(...[1, 5, -1, -10]);
console.log(sum);
