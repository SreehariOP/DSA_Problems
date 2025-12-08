// Given an integer array of size n containing distinct 
// values in the range from 0 to n (inclusive), return the only number missing from the array within this range.

function missingNumber(nums) {
    let len = nums.length;
    let sum = len*(len+1)/2;

    let sumArr = 0;
    for(let num of nums){
        sumArr+=num;
    }
    return sum- sumArr;
}

console.log(missingNumber( [0, 1, 2, 4, 5, 6]))