/* 
Intuitive and flexible destructuring of Objects into individual variables during assignment.
 */

function getASTNode() {
    return {
        one: 1,
        two: {
            op: 2
        },
        three: 3
    };
};

// var { op: a, lhs: { op: b }, rhs: c } = getASTNode();
var data = {
    one:a,
    two: {
        op: b
    },
    three
} = getASTNode();
console.log(data.one);
console.log(data.two.op);
console.log(data.three);