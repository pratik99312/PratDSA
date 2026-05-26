// Write a Programm Binary Search in JavaScript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(right>=left){
        let middle = Math.floor((left+right)/2);
       
       if(target == nums[middle]){
        return middle
       }else if(target < nums[middle]){
         right = middle -1;
       }else{
        left = middle + 1;
       }

    }
    return -1;
};

let nums = [-1,0,3,5,9,12];
let target = 9;

let result = search(nums, target);

console.log("Result index is::", result);

// Dry Run
// nums = [-1,0,3,5,9,12], target = 9
// left = 0, right = 5, middle = 2, nums[middle] = 3, target > nums[middle], left = middle + 1 = 3
// left = 3, right = 5, middle = 4, nums[middle] = 9, target == nums[middle], return index 4

// So the final output will be Result index is:: 4

// This is the optimized solution with O(1) space complexity and O(log n) time complexity.      