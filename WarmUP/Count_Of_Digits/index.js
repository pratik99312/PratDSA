// write a function that returns the count of digits in a given number
// write a function that returns the count of digits of a given number.
// write a function that returns the count of digits of a given number.



function countOfDigits(n) {
    if (n === 0) {
        return 1;
    }
    // converting negative number to positive number
    n = Math.abs(n)

    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let num = -34;

const result = countOfDigits(num)

console.log(result);


// dry run
// n = -34, n = 34, count = 0
// n = 34, n = 3, count = 1
// n = 3, n = 0, count = 2

// so the final result will be 2                    

// This is the optimized solution with O(1) space complexity and O(log n) time complexity.
