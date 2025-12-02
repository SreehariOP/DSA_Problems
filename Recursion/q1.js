// <!-- Given an integer n, write a function to print all numbers from 1 to n (inclusive) using recursion.

// You must not use any loops such as for, while, or do-while.
// The function should print each number on a separate line, in increasing order from 1 to n. -->

function printNumbers(n) {
    if(n==0) return;
        // Your code goes here
    process.stdout.write(n + " ");
    printNumbers(n-1); //4 3 2 1
        
}
function printNumbers(n) {
    if(n==0) return;
        // Your code goes here
    printNumbers(n-1);
    process.stdout.write(n + " "); //1 2 3 4
        
}
printNumbers(4);