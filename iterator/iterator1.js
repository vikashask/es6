/* 
An object is an iterator when it knows how to access items from a collection one at a time, 
while keeping track of its current position within that sequence
iterator is an object that provides a next() method which returns the next item in the sequence.
 */
function makeIterator(array) {
        var i=0;
        return {
            next: function () {
                return array[i] ? {
                    value: array[i],
                    done: false
                } : {
                    done: true
                };;
            }
        }
}

var it = makeIterator(['vikash', 'verma']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true