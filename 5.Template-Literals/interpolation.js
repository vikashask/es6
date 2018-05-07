/* 
Intuitive expression interpolation for single-line and multi-line strings. 
(Notice: don't be confused, Template Literals were originally named "Template Strings" 
in the drafts of the ECMAScript 6 language specification)
 */

var customer = {
    name: "vikash"
};
var card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
};
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// Flexible expression interpolation for arbitrary methods.
// get`http://vikask.com/vikash?bar=${bar + baz}&quux=${quux}`;