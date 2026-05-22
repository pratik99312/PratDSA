// Write a recursive function to calculate the sum of all odd numbers in an array.


let arr = [5, 3, 2, 0, 1, 8];

function sum(n) {
    let isOdd = (arr[n] % 2 != 0);

    if (n === 0) return isOdd ? arr[0] : 0;
    return ((isOdd ? arr[n] : 0) + sum(n - 1));
}


console.log(sum(arr.length - 1));


// dry run
// sum(5) => isOdd = false, return 0 + sum(4)
// sum(4) => isOdd = true, return 1 + sum(3)
// sum(3) => isOdd = false, return 0 + sum(2)
// sum(2) => isOdd = false, return 0 + sum(1)
// sum(1) => isOdd = true, return 3 + sum(0)
// sum(0) => isOdd = true, return 5

// so the final result will be 5 + 3 + 0 + 0 + 1 + 0 = 9

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.  