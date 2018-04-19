var founder = new Map();
founder.set("fb","mark");
founder.set("google","larry");
console.log(founder.size);
console.log(founder.get("twitter"));// undefinded
console.log(founder.has("yahoo")); //false

for(var [key,value] of founder){
    console.log(key+' fouded by '+ value);
}