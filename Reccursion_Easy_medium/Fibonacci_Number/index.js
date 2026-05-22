// Write a fibonacci function that takes a number n as input and returns the nth Fibonacci number. The Fibonacci sequence is defined as follows: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
};

const n = 5;

const result = fib(n);

console.log("Fibonacci Number:", result);

// dry run
// fib(5) => fib(4) + fib(3)
// fib(4) => fib(3) + fib(2)
// fib(3) => fib(2) + fib(1)
// fib(2) => fib(1) + fib(0) => 1 + 0 = 1
// ...
// so the final result will be Fibonacci Number: 5

// This is the optimized solution with O(2^n) time complexity and O(n) space complexity due to the recursive call stack.    

