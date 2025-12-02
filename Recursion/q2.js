// Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.

function NnumbersSum(N) {
    //your code goes here
    if(N===0) return 1;
    

    return NnumbersSum(N-1) * N;
    
}
console.log(NnumbersSum(5));