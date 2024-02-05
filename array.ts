// create a function  that takes a array of number as parameter and returns the average of those numbers 

const averageArr= (arr:number[]):number=>{
    let arr1:number=0;
    for (let i=0;i<arr.length;i++)
    {
       arr1=arr1+arr[i];
    }
    arr1=arr1/arr.length;
    return arr1;
}
console.log(averageArr([5,4,5,6]));