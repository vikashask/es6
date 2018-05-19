const arrayVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// In Es5
var filterData = arrayVal.filter(
    function(array) {
        return array % 3 === 0
    }
)
console.log(filterData);

// In Es6
var filterData = arrayVal.filter(array=>array % 3 === 0)
console.log(filterData);

  