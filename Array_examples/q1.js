// Given an array of integers nums, return the value of the largest element in the array

function maxArr( nums){
    let max = -Infinity;
    for(let num of nums){
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(maxArr([3, 3, 6, 1]))