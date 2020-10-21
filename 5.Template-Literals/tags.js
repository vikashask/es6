function tag(strings, ...values) {
  console.log("tag -> strings", strings);
  console.log("tag -> values", values);
}

const name = "vikask";
const age = 20;
tag`hello my name is ${name}.my age is ${age}`;
