// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

function rotateArray(nums, k) {
    n= nums.length;
    k = k%n;

    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
    reverse(nums, 0, n-1)

    return nums;
}
function reverse(nums, i, j){
    while(i<=j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++; 
        j--;
    }
    return nums;
}
//1 2 3 4 5 6   216543
//  [3, 4, 5, 6, 1, 2]  
console.log(rotateArray(  [3, 4, 1, 5, 3, -5], 8))