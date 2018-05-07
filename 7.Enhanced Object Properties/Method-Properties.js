/* 
 */
obj = {
    sum (a, b) {
        return a+b;
    },
    bar (x, y) {
        return x-y;
    },
    *que (x, y) {
        return x*y;        ;
    }
};

var test = obj.sum(2,4); // 6
console.log(test);
