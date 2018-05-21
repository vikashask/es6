var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);  // [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]


