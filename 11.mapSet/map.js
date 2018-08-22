/* 
    Cleaner data-structure for common algorithms based on maps.
    
    Every symbol value returned from Symbol() is unique. 
    Symbol('foo') === Symbol('foo'); // false 
    A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
*/

let m = new Map();
let s = Symbol();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;
m.size === 2;
for (let [key, val] of m.entries()){
    console.log(key + " = " + val);
} 