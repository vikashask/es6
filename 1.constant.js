/* 
var keyword
That means that they are available inside the function it was created, as well as any nested functions.
but not outside function 
*/
function test() {
    var myFunctionScopedVariable = 42;

    console.log(myFunctionScopedVariable); // 42

    function nestedTest() {
        console.log(myFunctionScopedVariable); // 42
    }

    nestedTest();
}

test();


/* 
The let keyword
The main difference between var and let is that let is block scoped, instead of function scoped.
 */

function test2() {
    let myFunctionScopedVariable = 42;
    const PI = 3.4;
    console.log(myFunctionScopedVariable); // 42
    console.log('constant :' + PI);
    function nestedTest() {
      console.log(myFunctionScopedVariable); // 42
    }
  
    nestedTest();
  }
  
  test2();
