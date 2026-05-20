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