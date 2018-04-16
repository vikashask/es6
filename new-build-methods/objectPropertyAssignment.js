/* 
New function for assigning enumerable properties of one or more source objects onto a destination object.
 */
var dest = {
    qu: 0
};
var src1 = {
    foo: 1,
    bar: 2
};
var src2 = {
    foo: 3,
    baz: 4,
    bar:66
};
// assign src1,src2 to dest
Object.assign(dest, src1, src2); // object property assignment
console.log(dest.qu) // === 0;
console.log(dest.foo) // === 3;
console.log(dest.bar) // === 2;
console.log(dest.baz) // === 4;