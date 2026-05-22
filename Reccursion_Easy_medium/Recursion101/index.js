// Recursion is a programming technique where a function calls itself in order to solve a problem. It typically involves a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems.

// In this example, we have a function called `print` that takes a number `n` as an argument. The function will print the value of `n` and then call itself with `n + 1` until `n` exceeds the value of `a`, which is set to 10. This will result in printing the numbers from 1 to 10.

let a = 10;

function print(n) {
  if (n > a) {
    return;
  }
  debugger;
  console.log(n);
  n = n + 1;
  print(n);
}

print(1);

// dry run  
// print(1) => print(2) => print(3) => print(4) => print(5) => print(6) => print(7) => print(8) => print(9) => print(10) => print(11)

// so the final result will be 1 2 3 4 5 6 7 8 9 10

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.    
