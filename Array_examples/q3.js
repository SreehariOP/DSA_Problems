// Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.

function ArrSorted(nums){
    let i = 0;
    let j = 1;
    while( j<nums.length){
        if(nums[j] < nums[i] ){
            return false;
        }
        i++;
        j++;
    }
    return true;
}

// console.log(ArrSorted( [1, 2, 3, 4, 5]))
console.log(ArrSorted( [1, 2, 1, 4, 5]))

// function isSorted(nums) {
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] < nums[i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
