

function findMaxConsecutiveOnes(nums) {
    let ones = 0;
    let maxOnes = 0;

    let i=0;
    while(i<nums.length){ //or for
        if(nums[i] !== 1){
            ones = 0;
        }
        else{
            ones++;
            maxOnes= Math.max(ones, maxOnes)
        }
        i++;
    }
    return maxOnes;

}

console.log(findMaxConsecutiveOnes( [1, 0, 1, 1, 1, 0, 1, 1, 1]))