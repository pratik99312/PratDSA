// Write a function to check if a number is a power of two or not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if( n == 1) return true;
    else if((n %2 != 0)|| n < 1) return false;

    return isPowerOfTwo(n/2);
};

const n = 8;

const result = isPowerOfTwo(n);

console.log("Is Power of Two:", result); 

// dry run
// n = 8, n == 1 is false, n % 2 == 0 and n > 1, return isPowerOfTwo(4)
// n = 4, n == 1 is false, n % 2 == 0 and n > 1, return isPowerOfTwo(2)
// n = 2, n == 1 is false, n % 2 == 0 and n > 1, return isPowerOfTwo(1)
// n = 1, n == 1 is true, return true

// so the final result will be Is Power of Two: true

// This is the optimized solution with O(log n) time complexity and O(log n) space complexity due to the recursive call stack.  