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
