/* 
Shorter syntax for common object property definition idio
*/
obj1 = {
    x,
    y
}

/* 
Support for computed names in object property definitions.
 */
let obj2 = {
    foo: "jay",
    ["raj" + fun()]: 42
}

// Support for method notation in object property definitions, for both regular functions and generator functions.

obj3 = {
    foo(a, b) {

    },
    bar(x, y) {

    },
    * quux(x, y) {}
}