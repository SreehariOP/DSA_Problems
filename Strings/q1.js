// Reverse every word in a string

// Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space.



// Return a string with the words in reverse order, concatenated by a single space.

// function reverseWords(s) {
//     let arr = s.split(" ");
//     // console.log(arr);
//     let newS = "";
//     let i =0, j=arr.length-1;
//     while(i<=j){
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp; 
//         i++;
//         j--;
//     }
//     // console.log("After While", arr)
//     for(let i=0; i<arr.length; i++){
//         newS = newS + arr[i] + " ";
//     }
//     return newS;
// }
function reverseWords(s) {
    return s.trim().split(" ").reverse().join(" ")
}

console.log(reverseWords("amazing coding skills"))