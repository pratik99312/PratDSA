/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
};

const nums = [0, 0, 1, 1, 2];

const result = removeDuplicates(nums);

console.log("Length:", result);
console.log("Modified Array:", nums);

// dry run  
// nums = [0, 0, 1, 1, 2], x = 0
// i = 0, nums[i] = 0, nums[x] = 0, x = 0
// i = 1, nums[i] = 0, nums[x] = 0, x = 0
// i = 2, nums[i] = 1, nums[x] = 0, x = 1, nums[1] = 1
// i = 3, nums[i] = 1, nums[x] = 1, x = 1
// i = 4, nums[i] = 2, nums[x] = 1, x = 2, nums[2] = 2

// so the final result will be Length: 3 and Modified Array: [0, 1, 2, 1, 2]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.    



