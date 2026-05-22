// Write a function that returns the number of negative numbers in an array

function countNegatives(arr) {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      b.push(arr[i]);
    }
  }
  return b;
}

const arr = [2, -9, 17, 0, -1, -10, -4, 8];

const result = countNegatives(arr);

console.log(result?.length);

// More Solutions
function negativeCounter(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

const result2 = negativeCounter(arr);
console.log("Count of Negative no.s in array is :: " + result2);


// dry run
// arr = [2, -9, 17, 0, -1, -10, -4, 8], count = 0
// i = 0, arr[i] = 2, not negative, count = 0
// i = 1, arr[i] = -9, negative, count = 1
// i = 2, arr[i] = 17, not negative, count = 1
// i = 3, arr[i] = 0, not negative, count = 1
// i = 4, arr[i] = -1, negative, count = 2
// i = 5, arr[i] = -10, negative, count = 3
// i = 6, arr[i] = -4, negative, count = 4
// i = 7, arr[i] = 8, not negative, count = 4

// so the final result will be Count of Negative no.s in array is :: 4
// This is the optimized solution with O(1) space complexity and O(n) time complexity.  
