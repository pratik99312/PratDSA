/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for(let i = 0 ;i < nums.length;i++){
        if(nums[i]== 1){
            currentCount++;
        }
        else{
            maxCount = Math.max(currentCount,maxCount);
            currentCount = 0;
        }
    }
    return Math.max(currentCount,maxCount);
};

const nums = [1, 1, 0, 1, 1, 1];

const result = findMaxConsecutiveOnes(nums);

console.log("Maximum Consecutive Ones:", result);

// dry run  
// maxCount = 0, currentCount = 0
// i = 0, nums[i] = 1, currentCount = 1
// i = 1, nums[i] = 1, currentCount = 2
// i = 2, nums[i] = 0, maxCount = 2, currentCount = 0
// i = 3, nums[i] = 1, currentCount = 1
// i = 4, nums[i] = 1, currentCount = 2
// i = 5, nums[i] = 1, currentCount = 3

// so the final result will be Maximum Consecutive Ones: 3   

// This is the optimized solution with O(1) space complexity and O(n) time complexity.

