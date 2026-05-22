/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n * (n+1)/2;

let partialSum = 0;
    for(let i = 0;i < nums.length;i++){
          partialSum = partialSum + nums[i];
    }

    return totalSum-partialSum;
};


const nums = [3, 0, 1];

const result = missingNumber(nums);

console.log("Missing Number:", result); 

// dry run
// nums = [3, 0, 1], n = 3, totalSum = 6, partialSum = 0
// i = 0, nums[i] = 3, partialSum = 3
// i = 1, nums[i] = 0, partialSum = 3
// i = 2, nums[i] = 1, partialSum = 4

// so the final result will be Missing Number: 2

// This is the optimized solution with O(1) space complexity and O(n) time complexity.  