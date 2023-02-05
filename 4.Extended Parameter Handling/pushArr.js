let arr = [];
let finalArr = [...arr, 3]; // alternative of push
console.log("finalArr", finalArr); // 3

let listArr = [2, 3, 4, 5, 6];
let lsArr = [];
listArr.map((data) => {
  [...listArr, data]; // listArr.push(data)
});
console.log("listArr", listArr);
