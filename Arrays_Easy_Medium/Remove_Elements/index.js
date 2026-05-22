/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0 ;
    for(let i = 0; i < nums.length;i++){
        if(nums[i] !== val){
            nums[x] = nums[i]
            x= x + 1;
        }
    }
    return x;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

const result = removeElement(nums, val);

console.log("Length:", result);
console.log("Modified Array:", nums);

// dry run  
// nums = [0,1,2,2,3,0,4,2], val = 2, x = 0
// i = 0, nums[i] = 0, nums[i] !== val, nums[0] = 0, x = 1
// i = 1, nums[i] = 1, nums[i] !== val, nums[1] = 1, x = 2
// i = 2, nums[i] = 2, nums[i] === val, x = 2
// i = 3, nums[i] = 2, nums[i] === val, x = 2
// i = 4, nums[i] = 3, nums[i] !== val, nums[2] = 3, x = 3
// i = 5, nums[i] = 0, nums[i] !== val, nums[3] = 0, x = 4
// i = 6, nums[i] = 4, nums[i] !== val, nums[4] = 4, x = 5
// i = 7, nums[i] = 2, nums[i] === val, x = 5

// so the final result will be Length: 5 and Modified Array: [0,1,3,0,4,0,4,2]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.

