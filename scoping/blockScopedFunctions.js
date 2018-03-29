/* 
var variables exist throughout the function they're declared in (or globally, 
if declared globally), they aren't confined to the block they're in. So this code is valid:
 */

{
    function foo() {
        return 1;
    }
    foo() === 1; {
        function foo() {
            return 2;
        }
        console.log(foo()); // 2
    }
    console.log(foo()); // 1
    
}