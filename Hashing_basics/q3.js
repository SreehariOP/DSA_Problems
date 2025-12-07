// Given an Array of integers B, and a target sum A.
// Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.


// Problem Constraints

// 1 <= Length of array B <= 105
// 0 <= Bi <= 109
// 0 <= A <= 109


// Input Format

// First argument A is the Target sum, and second argument is the array B


// Output Format

// Return an integer value 1 if there exists such pair, else return 0.

function findSumPair(nums, target){
    const s = new Set();

    for(let num of nums){
        let partner = target - num; 

        if(s.has(partner)){
            return 1;
        }

        s.add(num);
    }
    return 0;
}

console.log(findSumPair([3, 5, 1, 2, 1, 2], 8))
console.log(findSumPair([9, 10, 7, 10, 9, 1, 5, 1, 5], 21))