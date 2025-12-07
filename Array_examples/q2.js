// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

function secondLargest(nums){
    let max = -Infinity;
    let secMax = -Infinity;

    for(let num of nums){
        if(num > max){
            max = num;
        }
        if(num < max && num > secMax){
            secMax = num;
        }
    }
    if(secMax === -Infinity){
        return -1;
    }  
    return secMax;


}
// console.log(secondLargest( [8, 8, 7, 6, 5])) //7
console.log( secondLargest([10, 10, 10, 10, 10]));