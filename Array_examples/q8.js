// Your code goes here
// Given an array of integers nums and an integer target, find the smallest index (0 based indexing) 
// where the target appears in the array. If the target is not found in the array, return -1.
function linearSearch(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch( [2, -4, 4, 0, 10],6))