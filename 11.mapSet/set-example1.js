var founder = new Map();
founder.set("fb","mark");
founder.set("google","larry");
console.log(founder.size); //2 
console.log(founder.get("twitter"));// undefinded
console.log('yahoo has',founder.has("yahoo")); //false
console.log('google has ',founder.has("google")); //true

for(var [key,value] of founder){
    console.log(key+' founded by '+ value);
}