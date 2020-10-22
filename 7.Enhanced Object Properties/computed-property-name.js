const key = "lastName";

function getKey() {
  return "hello";
}
const person = {
  firstName: "vikash",
  [key]: "verma",
  ["age"]: 20,
  [getKey()]: "testing",
};
console.log("person", person);
