/* New specific string functions to search for a sub-string. */

console.log("hello".startsWith("ello", 1)); // true 
console.log("hello".endsWith("hell", 4));  // true 
console.log("hello".includes("ell"));  // true 
console.log("hello".includes("ell", 1));  // true 
console.log("hello".includes("ell", 2));  // false 