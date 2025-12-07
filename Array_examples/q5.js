// Given an integer array nums, rotate the array to the left by one.



// Note: There is no need to return anything, just modify the given array.


function rotateArrayByOne(nums) {
    let first = nums[0];
    for(let i=1; i<nums.length; i++){
        nums[i-1] = nums[i];
    }
    nums[nums.length-1] = first;
    return nums;
}
console.log(rotateArrayByOne( [-1, 0, 3, 6]))