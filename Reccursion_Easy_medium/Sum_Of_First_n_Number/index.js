// Write a recursive function to calculate the sum of first n natural numbers.


function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(5));

// dry run
// sum(5) => 5 + sum(4)
// sum(4) => 4 + sum(3)
// sum(3) => 3 + sum(2)
// sum(2) => 2 + sum(1)
// sum(1) => 1 + sum(0)
// sum(0) => 0

// so the final result will be 5 + 4 + 3 + 2 + 1 + 0 = 15