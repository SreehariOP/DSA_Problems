// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.



// This must be done in place, without making a copy of the array.

function moveZeroes(nums) {
    let ins = 0;
    for(let i=0; i<nums.length;i++){
        if(nums[i] !==0){
            let temp = nums[ins];
            nums[ins] = nums[i];
            nums[i] = temp;
            ins++;
        }
    }
    return nums;
}

// console.log(moveZeroes([1,0, 1, 4, 0, 5, 2]))
console.log(moveZeroes([0, 0, 0, 1, 3, -2]))
