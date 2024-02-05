// create a function  that takes a array of number as parameter and returns the average of those numbers 
var averageArr = function (arr) {
    var arr1 = 0;
    for (var i = 0; i < arr.length; i++) {
        arr1 = arr1 + arr[i];
    }
    arr1 = arr1 / arr.length;
    return arr1;
};
console.log(averageArr([5, 4, 5, 6]));
