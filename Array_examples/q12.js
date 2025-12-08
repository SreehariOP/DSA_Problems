// Kadane's Algorithm


// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.



// A subarray is a contiguous non-empty sequence of elements within an array.

function maxSubArray(nums) {
    let sum = 0;
    let maxSum = -Infinity;

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        maxSum = Math.max(sum, maxSum)
        if(sum<0){
            sum = 0;
        }

    }
    return maxSum;
}

console.log(maxSubArray( [2, 3, 5, -2, 7, -4] ))