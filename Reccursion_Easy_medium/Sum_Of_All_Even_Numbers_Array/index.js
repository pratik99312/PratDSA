// write a  function to find the sum of all even numbers in an array using recursion.


let arr = [5, 3, 2, 0, 1, 8, 6];

function sum(n) {
    let isEven = (arr[n] % 2 == 0);

    if (n === 0) return isEven ? arr[0] : 0;
    return ((isEven ? arr[n] : 0) + sum(n - 1));
}


console.log(sum(arr.length - 1));

// dry run
// sum(6) => isEven = true, return 6 + sum(5)
// sum(5) => isEven = true, return 8 + sum(4)
// sum(4) => isEven = false, return 0 + sum(3)
// sum(3) => isEven = true, return 0 + sum(2)
// sum(2) => isEven = true, return 2 + sum(1)
// sum(1) => isEven = false, return 0 + sum(0)
// sum(0) => isEven = false, return 0

// so the final result will be 6 + 8 + 0 + 0 + 2 + 0 + 0 = 16

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.  
