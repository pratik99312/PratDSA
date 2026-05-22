// Write a function that returns smallest number in an array

// let arr = [5, 0, 7, 10, 34, 17, 1, 97, 60];
let arrB = [-9, -19, -3, -21, -99, -1, -5, -7, -11];
function findSmallest(arr) {
  let smallest = arrB[0];
  for (let i = 0; i < arr.length; i++) {
    if (arrB[i] < smallest) {
      smallest = arrB[i];
    }
  }
  return smallest;
}

const result = findSmallest(arrB);

console.log("Smallest no in an array is:: " + result);


// dry run
// arrB = [-9, -19, -3, -21, -99, -1, -5, -7, -11], smallest = -9
// i = 0, arrB[i] = -9, smallest = -9
// i = 1, arrB[i] = -19, smallest = -19
// i = 2, arrB[i] = -3, smallest = -19
// i = 3, arrB[i] = -21, smallest = -21
// i = 4, arrB[i] = -99, smallest = -99
// i = 5, arrB[i] = -1, smallest = -99
// i = 6, arrB[i] = -5, smallest = -99
// i = 7, arrB[i] = -7, smallest = -99
// i = 8, arrB[i] = -11, smallest = -99

// so the final result will be Smallest no in an array is:: -99
// This is the optimized solution with O(1) space complexity and O(n) time complexity.  