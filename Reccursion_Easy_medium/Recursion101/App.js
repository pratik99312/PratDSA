// Recursion is a programming technique where a function calls itself in order to solve a problem. It typically involves a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems.

// In this example, we have a function called `print` that takes a number `n` as an argument. The function will print the value of `n` and then call itself with `n + 1` until `n` exceeds the value of `a`, which is set to 10. This will result in printing the numbers from 1 to 10.



function print(n) {
    if (n < 1) {
        return;
    }
    debugger;
    console.log(n);
    n = n - 1;
    print(n)
}

let a = 10;

print(a);

// dry run  
// print(10) => print(9) => print(8) => print(7) => print(6) => print(5) => print(4) => print(3) => print(2) => print(1) => print(0)

// so the final result will be 10 9 8 7 6 5 4 3 2 1

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.