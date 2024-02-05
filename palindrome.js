// palindrome string or not
var isPalindrome = function (str) {
    var myPalin = str.split("").reverse().join("");
    return str === myPalin;
};
console.log(isPalindrome("ABCDEF"));
