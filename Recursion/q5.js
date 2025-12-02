// Given a string s, return true if the string is palindrome, otherwise false.



// A string is called palindrome if it reads the same forward and backward.


// Examples:
// Input : s = "hannah"

// Output : true

// Explanation : The string when reversed is --> "hannah", which is same as original string , so we return true.
function isPalindromeRec(s, left = 0, right = s.length - 1) {
    if (left >= right) return true;
  
    if (s[left] !== s[right]) return false;
  
    return isPalindromeRec(s, left + 1, right - 1);
  }