/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;

    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i]
    }

    return xor;
};

const nums = [4, 1, 2, 1, 2];

const result = singleNumber(nums);

console.log("Single Number:", result); 

// dry run
// nums = [4, 1, 2, 1, 2], xor = 0
// i = 0, nums[i] = 4, xor = 0 ^ 4 = 4
// i = 1, nums[i] = 1, xor = 4 ^ 1 = 5
// i = 2, nums[i] = 2, xor = 5 ^ 2 = 7
// i = 3, nums[i] = 1, xor = 7 ^ 1 = 6
// i = 4, nums[i] = 2, xor = 6 ^ 2 = 4

// so the final result will be Single Number: 4

// This is the optimized solution with O(1) space complexity and O(n) time complexity.