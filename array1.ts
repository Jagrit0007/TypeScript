// write a function that takes an array of numbers and returns the maximum value

const maxValue=(arr:number[]):number=>{
    let max:number=0;
    for (let i=0;i<arr.length;i++)
    {
        if (arr[i]>=arr[i+1])
        {
          max=arr[i];
        }
    }
    return max;

}
console.log(maxValue([2,5,80,25,67]));