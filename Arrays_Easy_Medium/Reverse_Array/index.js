// write a program to reverse array

let arr = [1, 2, 3, 4, 5];

let newArray = [];

function arrayReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }

  return newArray;
}

const result = arrayReverse(arr);

console.log("Reverse Array is::", result);

// Dry Run
// arr = [1, 2, 3, 4, 5], newArray = []
// i = 4, newArray = [5]
// i = 3, newArray = [5, 4]
// i = 2, newArray = [5, 4, 3]
// i = 1, newArray = [5, 4, 3, 2]
// i = 0, newArray = [5, 4, 3, 2, 1]

// So the final output will be Reverse Array is:: [5, 4, 3, 2, 1]

// This is the optimized solution with O(n) space complexity and O(n) time complexity.

// Two Pointers

function reverseArray(nums) {
  for (let left = 0, right = nums.length - 1; left < right; left++, right--) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
  return nums;
}

const res = reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

console.log("Two Pointer solutions::", res);

// dry run
// arr = [1, 2, 3, 4, 5], left = 0, right = 4
// left = 0, right = 4, temp = 1, arr = [5, 2, 3, 4, 1]
// left = 1, right = 3, temp = 2, arr = [5, 4, 3, 2, 1]
// left = 2, right = 2 (loop ends)

// So the final output will be Two Pointer solutions:: [5, 4, 3, 2, 1]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.

// example 2 Two Pointers

function reverseArray2(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    let temp = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = temp;
  }
  return nums;
}

reverseArray2([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

const res2 = reverseArray2([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

console.log("Two Pointer solutions for(let i = 0;..)::", res2);

// dry run
// arr = [1, 2, 3, 4, 5], i = 0
// i = 0, temp = 1, arr = [5, 2, 3, 4, 1]
// i = 1, temp = 2, arr = [5, 4, 3, 2, 1]
// i = 2 (loop ends)

// So the final output will be Two Pointer solutions for(let i = 0;..):: [5, 4, 3, 2, 1]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.
