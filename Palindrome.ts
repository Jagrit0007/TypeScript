
// palindrome string or not
  
const isPalindrome=(str:string):boolean=>{
    let myPalin= str.split("").reverse().join("");
    return str===myPalin;


}
console.log(isPalindrome("ABCDEF"));