// Given an array nums of size n which may contain duplicate elements.



// Rreturn a list of pairs where each pair contains a unique element from the array and its frequency in the array.



// You may return the result in any order, but each element must appear exactly once in the output.


// Examples:
// Input: nums = [1, 2, 2, 1, 3]

// Output: [[1, 2], [2, 2], [3, 1]]

// Explanation:

// - 1 appears 2 times

// - 2 appears 2 times

// - 3 appears 1 time

// Order of output can vary.

function countFreq(nums){
    const freq = {}

    for(let num of nums){
        if(freq[num] === undefined){
            freq[num] = 1; 
        } else {
            freq[num]++;
        }
    }
    // console.log(freq);

    let res = [];
    for(let key in freq){
        res.push([Number(key), freq[key]])
    }
    return res;
}

console.log(countFreq([1, 2, 2, 1, 3]));