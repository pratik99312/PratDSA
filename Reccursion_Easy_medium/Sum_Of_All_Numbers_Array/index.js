// write a program to find the sum of all numbers in an array using recursion.


let arr = [5, 3, 2, 0, 1];

function sum(n) {
    if (n === 0) return arr[0];
    return arr[n] + sum(n - 1);
}


console.log(sum(arr.length - 1));

// dry run
// sum(4) => arr[4] + sum(3) => 1 + sum(3)
// sum(3) => arr[3] + sum(2) => 0 + sum(2)
// sum(2) => arr[2] + sum(1) => 2 + sum(1)
// sum(1) => arr[1] + sum(0) => 3 + sum(0)
// sum(0) => arr[0] => 5

// so the final result will be 5 + 3 + 2 + 0 + 1 = 11

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.  