// Union of two sorted arrays

// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union 
// must be in ascending order.



// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

// Output: [1, 2, 3, 4, 5, 7]
function unionArray(nums1, nums2) {
    let nums3 = [];

    let x=0;
    let y=0;
    while(nums1[x]<=nums2[y]){
        nums3.push(nums1[x]);
        x++;
        y++;
    }
    while(nums1[y]<=nums2[x]){
        nums3.push(nums1[y]);
        y++;
        x++;
    }
    for(let i=x; i<nums1.length; i++){
        nums3.push(nums1[i]);
    }
    for(let i=y; i<nums2.length; i++){
        nums3.push(nums1[i]);
    }
    return nums3;
    
}

console.log(unionArray([1, 2, 3, 4, 5], [1, 2, 7]))