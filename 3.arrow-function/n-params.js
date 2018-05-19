// using 0 parameter
var docLogEs6 = () => { console.log('document'); };
docLogEs6(); // #document... <html> ….

const logData = () =>{
    console.log("test");
}
logData();  // test


// using two parameter
const multiplyES6 = (x, y) => { return x * y };
console.log(multiplyES6(3,4)); // 12

// using three parameter
const sumEs6 = (a,b,c) =>{ return a+b+c}
console.log(sumEs6(2,3,4)); // 9

var data = [];
const setName = (id,name)=>{
    data.push({id:id,full_name:name})
    console.log("test setname");
    
};
setName(1,"vikash");
console.log(data); // test setname
                   //[ { id: 1, full_name: 'vikash' } ]
