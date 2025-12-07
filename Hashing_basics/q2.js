// Given an array A of N integers, return the number of unique elements in the array.


// Problem Constraints

// 1 <= N <= 105
// 1 <= A[i] <= 109

function countUnique(nums){
    const set = new Set();

    for(let num of nums){
        set.add(num);
    }
    return set.size;

}

console.log(countUnique([3, 4, 3, 6, 6]))