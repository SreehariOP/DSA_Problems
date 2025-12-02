// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.


// Examples:
// Input: n=5, arr = [1,2,3,4,5]



// Output: [5,4,3,2,1]



// Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]

function reverse(arr, n) {
    // Your code here
    let l = 0;
    let r = n-1;

    return reverseArr(arr,n,l,r);
    
}
function reverseArr(arr,n,l,r){
    if(l>r){
        return arr;
    }
    
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    return reverseArr(arr, n, l+1, r-1);
}
console.log(reverse([1,2,3,4,5], 5));