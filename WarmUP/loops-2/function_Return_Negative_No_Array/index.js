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
