/* 
Shorter syntax for common object property definition idiom.
 */
var x = 0,
    y = 0;
obj = {
    x,
    y
};

console.log(obj);
/* 
Computed Property Names
Support for computed names in object property definitions.
 */
que = () => {   
    return 2;
}
/* 
function que() 
{
     return 2
} */
let obj2 = {
    foo: "bar",
    ["baz" + que()]: 42
};
