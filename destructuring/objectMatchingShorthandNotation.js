/* 
Intuitive and flexible destructuring of Objects into individual variables during assignment.
 */

function getASTNode() {
    return {
        one: 1,
        two: 2,
        three: 3
    };
};

var {
    one,
    two,
    three
} = getASTNode();
console.log(one);
console.log(two);
console.log(three);

