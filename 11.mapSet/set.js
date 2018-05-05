/* 
Cleaner data-structure for common algorithms based on sets.
 */
let s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
for (let key of s.values()){
    console.log(key);
} // insertion order 