/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill all the remaining to zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log("Array after moving zeroes:", nums);

// dry run
// nums = [0, 1, 0, 3, 12], x = 0
// i = 0, nums[i] = 0, x = 0
// i = 1, nums[i] = 1, nums[0] = 1, x = 1
// i = 2, nums[i] = 0, x = 1
// i = 3, nums[i] = 3, nums[1] = 3, x = 2
// i = 4, nums[i] = 12, nums[2] = 12, x = 3

// fill remaining to zero
// i = 3, nums[3] = 0
// i = 4, nums[4] = 0

// so the final result will be Array after moving zeroes: [1,3,12,0,0]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.  
