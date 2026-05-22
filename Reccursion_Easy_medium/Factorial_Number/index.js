// write a fuction to find the factorial of a number using recursion.

function factorialNum(n) {
  if (n == 1) return 1;
  return n * factorialNum(n - 1);
}

console.log(factorialNum(6));

// dry run
// factorialNum(6) => 6 * factorialNum(5)
// factorialNum(5) => 5 * factorialNum(4)
// factorialNum(4) => 4 * factorialNum(3)
// factorialNum(3) => 3 * factorialNum(2)
// factorialNum(2) => 2 * factorialNum(1)
// factorialNum(1) => 1

// so the final result will be 6 * 5 * 4 * 3 * 2 * 1 = 720

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.
