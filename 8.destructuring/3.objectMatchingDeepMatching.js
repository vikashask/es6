/* 
Intuitive and flexible destructuring of Objects into individual variables during assignment.
 */

function getASTNode() {
  return {
    one: 1,
    two: {
      op: 2,
    },
    three: 3,
  };
}

// var { op: a, lhs: { op: b }, rhs: c } = getASTNode();
var data = ({
  one: a,
  two: {
    op: b, // deep matching
  },
  three,
} = getASTNode());
console.log(data.one); // 1
console.log(data.two.op); // 2
console.log(data.three); // 3

const { name, age, gender = "m", hairColor: color } = {
  name: "bob",
  age: 20,
  hairColor: "blue",
};
console.log(name, age, gender, color);
